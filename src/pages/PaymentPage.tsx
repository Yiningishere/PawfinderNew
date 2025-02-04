import { useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface DonationData {
  amount: number;
  type: 'one-time' | 'monthly';
  donorInfo: {
    name: string;
    email: string;
    message: string;
  };
}

interface OrderData {
  purchase_units: Array<{
    description: string;
    amount: {
      currency_code: string;
      value: string;
    };
  }>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = (amount: number, actions: any): Promise<string> => {
  try {
    const order: OrderData = {
      purchase_units: [
        {
          description: "Charity Donation",
          amount: {
            currency_code: "USD",
            value: amount.toString(),
          },
        },
      ],
    };

    return actions.order.create(order);
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onApprove = (_data: any, actions: any): Promise<void> => {
  try {
    return actions.order.capture().then((details: { payer: { name: { given_name: string; }; }; }) => {
      console.log("Transaction completed:", details);
      alert(`Thank you for your donation! Transaction completed by ${details.payer.name.given_name}`);
    });
  } catch (error) {
    console.error("Error approving transaction:", error);
    alert("There was an error processing your donation. Please try again.");
    return Promise.reject(error); // or return Promise.resolve(undefined) if you want to avoid throwing
  }
};

export default function PaymentPage() {
  const location = useLocation();
  const donationData = location.state as DonationData | null;

  if (!donationData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Donation Data Not Found</h1>
        <p className="text-gray-600">There was an issue retrieving your donation information.</p>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={{ clientId: "ATXaCzfoL824Dk66jrsMEgJw1cRhZMVuZoe-MC-o0uAYAKREZM0alchPDKLoXOHSyrVwVGNJbLIFIfwW" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Donation Details</h2>
                <p className="text-gray-600">
                  <strong>Name:</strong> {donationData.donorInfo.name}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {donationData.donorInfo.email}
                </p>
                <p className="text-gray-600">
                  <strong>Message:</strong> {donationData.donorInfo.message}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Complete Payment</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="paypal-buttons">
                  <PayPalButtons
                    createOrder={(_data, actions) => createOrder(donationData.amount, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                    style={{
                      layout: "vertical",
                      color: "blue",
                      shape: "rect",
                      label: "pay"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
