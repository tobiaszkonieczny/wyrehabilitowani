import type { Route } from "./+types/home";
import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { ServicesSection } from "~/components/services-section";
import { ConditionsSection } from "~/components/conditions-section";
import { FirstVisitSection } from "~/components/first-visit-section";
import { PreVisitInfoSection } from "~/components/pre-visit-info-section";
import { PricingSection } from "~/components/pricing-section";
import { BookingSection } from "~/components/booking-section";
import { MapSection } from "~/components/map-section";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "wyrehabilitowani - Profesjonalna fizjoterapia" },
    { name: "description", content: "Profesjonalna fizjoterapia dla Twojego zdrowia i komfortu życia. Terapia manualna, masaż leczniczy, rehabilitacja." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ConditionsSection />
      <FirstVisitSection />
      <PreVisitInfoSection />
      <PricingSection />
      <BookingSection />
      <MapSection />
      <Footer />
    </div>
  );
}
