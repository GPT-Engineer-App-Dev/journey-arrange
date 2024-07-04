import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-200">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[500px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <div className="flex space-x-4 mb-4">
            <Input placeholder="Search destinations, hotels, or flights" className="w-96" />
            <Button variant="primary">Search</Button>
          </div>
          <Button variant="secondary">Explore Now</Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Destination {item}</CardTitle>
                <CardDescription>Short description of destination {item}.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <CardHeader>
                    <CardTitle>Special Offer {item}</CardTitle>
                    <CardDescription>Details of special offer {item}.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="primary">Book Now</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <Avatar className="mx-auto mb-4" />
                <CardTitle>Customer {item}</CardTitle>
                <CardDescription>"This is feedback from customer {item}."</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p>Information about the company.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Important Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: contact@travelbooking.com</p>
              <p>Phone: +123 456 7890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;