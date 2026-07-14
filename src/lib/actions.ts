"use server";

import { createClient } from "@/lib/supabase/server";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("newsletter")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        return { success: false, error: "This email is already subscribed." };
      }
      return { success: false, error: "Something went wrong. Please try again." };
    }

    return { success: true, error: null };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Name, email, and message are required." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("messages")
      .insert({ name, email, phone, subject, message });

    if (error) {
      return { success: false, error: "Failed to send message. Please try again." };
    }

    return { success: true, error: null };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function createRestaurantReservation(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const partySize = parseInt(formData.get("partySize") as string, 10);
  const requests = formData.get("requests") as string;

  if (!name || !email || !date || !time) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("restaurant_reservations")
      .insert({
        guest_name: name,
        guest_email: email,
        guest_phone: phone,
        reservation_date: date,
        reservation_time: time,
        party_size: partySize || 2,
        special_requests: requests,
      });

    if (error) {
      return { success: false, error: "Failed to create reservation. Please try again." };
    }

    return { success: true, error: null };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
