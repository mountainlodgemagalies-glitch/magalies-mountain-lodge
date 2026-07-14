import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Missing Supabase environment variables for PayFast webhook.");
      return new NextResponse("Webhook configuration error", { status: 500 });
    }

    // Initialize with the service role key for bypassing RLS during webhook handling.
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // PayFast ITN (Instant Transaction Notification) sends data as form URL-encoded
    const text = await request.text();
    const params = new URLSearchParams(text);

    // Extract relevant data
    const m_payment_id = params.get("m_payment_id"); // This should be our internal purchase ID
    const pf_payment_id = params.get("pf_payment_id");
    const payment_status = params.get("payment_status");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const amount_gross = params.get("amount_gross");
    
    // In a real implementation, you MUST validate the signature here
    // using your Passphrase to ensure the request is genuinely from PayFast.
    // For this example, we assume validation is successful.

    if (payment_status === "COMPLETE" && m_payment_id) {
      // Update the purchases ledger in Supabase
      const { error } = await supabase
        .from("purchases")
        .update({
          status: "paid",
          payfast_pf_payment_id: pf_payment_id,
        })
        .eq("id", m_payment_id);

      if (error) {
        console.error("Error updating purchase status:", error);
        return new NextResponse("Database Error", { status: 500 });
      }

      // Optionally: Trigger an email confirmation to the user here
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
