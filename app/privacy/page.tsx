import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { config } from "@/src/site.helpers";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase text-charcoal tracking-tight mb-10">
            Privacy Policy
          </h1>
          <div className="font-body text-warm-gray leading-relaxed space-y-5 text-base">
            <p>
              This website is operated by{" "}
              <span className="text-charcoal font-medium">{config.businessName}</span>
              {config.businessLocation ? <> located at {config.businessLocation}</> : null}.{" "}
              We collect the name, phone number, and email address you submit through our
              contact form solely to respond to your service inquiry.
            </p>
            <p>
              We do not sell, share, or rent your personal information to third parties.
              Your information is stored securely and used only to contact you about the
              services you requested.
            </p>
            <p>
              By submitting the contact form you consent to being contacted by{" "}
              <span className="text-charcoal font-medium">{config.businessName}</span>{" "}
              via phone or email. For questions about your data, contact us at the phone
              number listed on this site.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
