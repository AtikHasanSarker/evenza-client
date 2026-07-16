"use client";

import { useState } from "react";
import { Input, TextArea, Card, TextField, Label } from "@heroui/react";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

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
          Have questions? We&#39;d love to hear from you.
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
              <TextField className="w-full" isRequired>
                <Label>First Name</Label>

                <Input
                  name="firstName"
                  placeholder="John"
                  autoComplete="given-name"
                />
              </TextField>

              <TextField className="w-full" isRequired>
                <Label>Last Name</Label>

                <Input
                  name="lastName"
                  placeholder="Doe"
                  autoComplete="family-name"
                />
              </TextField>
            </div>

            <TextField className="w-full" isRequired>
              <Label>Email Address</Label>

              <Input
                name="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
              />
            </TextField>

            <TextField className="w-full" isRequired>
              <Label>Subject</Label>

              <Input name="subject" placeholder="How can we help?" />
            </TextField>

            <TextField className="w-full" isRequired>
              <Label>Message</Label>

              <TextArea
                name="message"
                placeholder="Tell us more about your inquiry..."
                rows={5}
              />
            </TextField>

            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full h-10"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
