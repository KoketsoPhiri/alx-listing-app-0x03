import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    propertyImage: "https://example.com/property.jpg", // A placeholder image URL
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6 lg:p-10">
      <h1 className="text-3xl font-bold mb-8">Confirm and pay</h1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="space-y-8">
          <BookingForm />
          <CancellationPolicy />
        </div>
        <div className="mt-8 lg:mt-0">
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}