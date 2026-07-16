"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import Button from "../ui/Button";
import { createEvent } from "@/services/api/events";


const categories = [
  "Technology",
  "Business",
  "Education",
  "Music",
  "Sports",
  "Art",
];

export default function AddEventForm() {
  const router = useRouter();
 const [category, setCategory] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const eventData = {
      title: formData.get("title") as string,
      image: formData.get("banner") as string,
      description: formData.get("description") as string,
      category,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      venue: formData.get("venue") as string,
      location: formData.get("location") as string,
      price: Number(formData.get("ticketPrice")),
      seats: Number(formData.get("seats")),
      organizer: {
        name: formData.get("organizerName") as string,
        email: formData.get("organizerEmail") as string,
      },
    };

    try {
      console.log(eventData);
      await createEvent(eventData);
      toast.success("Event created successfully.");
      router.push("/dashboard/manage-events");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField className="w-full" isRequired>
          <Label>Event Title</Label>
          <Input name="title" placeholder="Tech Conference 2026" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Banner Image URL</Label>
          <Input name="banner" placeholder="https://example.com/banner.jpg" />
        </TextField>

        <Select
          name="category"
          placeholder="Select a category"
          selectedKey={category}
          onSelectionChange={(key) => setCategory(key as string)}
        >
          <Label>Category</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {categories.map((item) => (
                <ListBox.Item key={item} id={item} textValue={item}>
                  {item}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" isRequired>
          <Label>Ticket Price</Label>
          <Input name="ticketPrice" type="number" placeholder="20" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Total Seats</Label>
          <Input name="seats" type="number" placeholder="100" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Event Date</Label>
          <Input name="date" type="date" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Event Time</Label>
          <Input name="time" type="time" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Venue</Label>
          <Input name="venue" placeholder="NSTU Auditorium" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Location</Label>
          <Input name="location" placeholder="Noakhali, Bangladesh" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Organizer Name</Label>
          <Input name="organizerName" placeholder="John Doe" />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Organizer Email</Label>
          <Input
            name="organizerEmail"
            type="email"
            placeholder="john@example.com"
          />
        </TextField>

        <TextField className="w-full" isRequired>
          <Label>Description</Label>
          <TextArea
            name="description"
            placeholder="Write a short description for the event..."
            rows={4}
          />
        </TextField>
      </div>

      <Button
        type="submit"
        color="primary"
        className="h-11 w-full"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
      >
        {isSubmitting ? "Creating Event..." : "Create Event"}
      </Button>
    </form>
  );
}