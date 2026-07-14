import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Magalies Mountain Lodge terms and conditions for accommodation, spa services, and events.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground text-lg">Last updated: January 2025</p>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {[
              { title: "1. Booking & Payment", content: "A 50% deposit is required to confirm your reservation. The remaining balance is due 7 days prior to arrival. We accept payment via EFT, credit card (via PayFast), and direct bank transfer." },
              { title: "2. Cancellation Policy", content: "Cancellations made 14+ days before arrival: full refund minus R200 admin fee. Cancellations 7-13 days before arrival: 50% refund. Cancellations less than 7 days before arrival: no refund. We strongly recommend travel insurance." },
              { title: "3. Check-in & Check-out", content: "Check-in time is 14:00 and check-out time is 10:00. Early check-in and late check-out may be arranged subject to availability at an additional charge." },
              { title: "4. Adults Only Policy", content: "Magalies Mountain Lodge is a strictly adults-only establishment. No children under the age of 18 are permitted on the premises. This policy is strictly enforced." },
              { title: "5. No Pets Policy", content: "For the comfort and safety of all guests, no pets are allowed on the premises. Service animals may be accommodated with prior arrangement." },
              { title: "6. Smoking Policy", content: "Smoking is not permitted inside any rooms or enclosed public areas. Designated outdoor smoking areas are available." },
              { title: "7. Liability", content: "Magalies Mountain Lodge is not liable for any loss, damage, or injury to guests or their property, except where caused by our negligence. Guests are responsible for their own belongings." },
              { title: "8. Spa Services", content: "Spa treatments must be booked in advance. Cancellations within 24 hours of the appointment will be charged in full. Medical conditions should be disclosed before treatments." },
              { title: "9. Force Majeure", content: "We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, power outages, or government actions." },
              { title: "10. Governing Law", content: "These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of South African courts." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
