import { Card } from "@heroui/react";

export default function AboutPage() {
  return (
    <div className="space-y-8 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Evenza</h1>
        <p className="mt-2 text-gray-600">
          Learn more about our event discovery platform
        </p>
      </div>

      <Card className="space-y-6 p-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600">
            Evenza is dedicated to helping people discover and attend amazing
            events. We believe in creating connections through shared
            experiences.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-gray-600">
            To become the world's leading event discovery platform where users
            can easily find, explore, and manage events that matter to them.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Easy-to-use platform for discovering events</li>
            <li>• Comprehensive event information and details</li>
            <li>• Secure ticket booking and management</li>
            <li>• 24/7 customer support</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
