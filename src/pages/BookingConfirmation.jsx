import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { flightInfo, passengerDetails, bookingReference } = location.state || {};

  if (!flightInfo || !passengerDetails || !bookingReference) {
    return (
      <div className="text-center">
        <h1 className="text-3xl">No Booking Information</h1>
        <p>It seems like there is no booking information available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
          <CardDescription>Thank you for booking with us!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Flight Information</h2>
            <p>Flight Number: {flightInfo.flightNumber}</p>
            <p>Departure: {flightInfo.departure}</p>
            <p>Arrival: {flightInfo.arrival}</p>
            <p>Date: {flightInfo.date}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Passenger Details</h2>
            <p>Name: {passengerDetails.name}</p>
            <p>Email: {passengerDetails.email}</p>
            <p>Phone: {passengerDetails.phone}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Booking Reference</h2>
            <p>{bookingReference}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingConfirmation;