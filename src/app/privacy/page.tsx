import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Magalies Mountain Lodge privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg">Last updated: January 2025</p>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When you book a stay, purchase a spa treatment, or contact us, we may collect personal information including your name, email address, phone number, payment details, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We use your information to process bookings, communicate with you about your reservation, send promotional materials (with your consent), improve our services, and comply with legal obligations.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We implement appropriate security measures to protect your personal information. All payment transactions are processed securely through PayFast. We do not store credit card details on our servers.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our website uses cookies to enhance your browsing experience, analyse site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We use third-party services including Supabase (database), PayFast (payments), and NightsBridge (booking management). These services have their own privacy policies governing the use of your information.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@magalieslodge.co.za.
          </p>

          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any privacy-related queries, please contact us at info@magalieslodge.co.za or call +27 (0) 12 345 6789.
          </p>
        </div>
      </section>
    </div>
  );
}
