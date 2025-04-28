import { useState } from "react";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const SubscriptionPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Are you online?");
      setLoading(false);
      return;
    }

    const options = {
      key: "rzp_test_xRb7lHmpQwjujv",
      amount: 1 * 100,
      currency: "INR",
      name: "Python Tutor AI",
      description: "Subscription Payment",
      handler: function (response) {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Your User",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Python Tutor AI</h2>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        {loading ? "Processing..." : "Subscribe for ₹499"}
      </button>
    </div>
  );
};

export default SubscriptionPage;
