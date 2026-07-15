"use client";

import { useState } from "react";
import { Input, TextArea, Button, Card } from "@heroui/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add contact form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="space-y-8 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="space-y-4 p-6">
            <div className="flex gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">support@evenza.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  123 Event Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8 lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="First Name"
                placeholder="John"
                required
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                required
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              required
            />

            <Input
              label="Subject"
              placeholder="How can we help?"
              required
            />

            <TextArea
              label="Message"
              placeholder="Tell us more about your inquiry..."
              minRows={5}
              required
            />

            <Button
              type="submit"
              color="primary"
              size="lg"
              fullWidth
              isLoading={isSubmitting}
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
