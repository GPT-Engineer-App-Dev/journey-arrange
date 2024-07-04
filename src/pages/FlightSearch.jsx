import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const flightSearchSchema = z.object({
  departureLocation: z.string().min(1, "Departure location is required"),
  arrivalLocation: z.string().min(1, "Arrival location is required"),
  departureDate: z.date().optional(),
  returnDate: z.date().optional(),
  passengers: z.number().min(1, "At least one passenger is required"),
});

const FlightSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(flightSearchSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("Search submitted", {
      description: "Your flight search has been submitted.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Flights</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="departureLocation" className="block mb-2">
            Departure Location
          </label>
          <Input
            id="departureLocation"
            {...register("departureLocation")}
            placeholder="Enter departure location"
          />
          {errors.departureLocation && (
            <p className="text-red-500">{errors.departureLocation.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="arrivalLocation" className="block mb-2">
            Arrival Location
          </label>
          <Input
            id="arrivalLocation"
            {...register("arrivalLocation")}
            placeholder="Enter arrival location"
          />
          {errors.arrivalLocation && (
            <p className="text-red-500">{errors.arrivalLocation.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="departureDate" className="block mb-2">
            Departure Date
          </label>
          <DatePickerDemo
            {...register("departureDate")}
            placeholder="Select departure date"
          />
          {errors.departureDate && (
            <p className="text-red-500">{errors.departureDate.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="returnDate" className="block mb-2">
            Return Date
          </label>
          <DatePickerDemo
            {...register("returnDate")}
            placeholder="Select return date"
          />
          {errors.returnDate && (
            <p className="text-red-500">{errors.returnDate.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="passengers" className="block mb-2">
            Number of Passengers
          </label>
          <Input
            id="passengers"
            type="number"
            {...register("passengers")}
            placeholder="Enter number of passengers"
          />
          {errors.passengers && (
            <p className="text-red-500">{errors.passengers.message}</p>
          )}
        </div>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default FlightSearch;