import LeistungenContent from "@/components/leistungen/LeistungenContent";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Leistungen",
  description:
    "Vierzehn Behandlungsarten unter einem Dach. Manuelle Therapie, Applied Kinesiology nach ICAK-D, Sportphysiotherapie nach DOSB-Standard, McKenzie, Cyriax, PNF, Trainingstherapie und Ernährungsberatung in Mühldorf am Inn.",
};

export default function LeistungenPage() {
  return (
    <>
      <LeistungenContent />
      <ContactSection />
    </>
  );
}
