import UeberMichContent from "@/components/ueber-mich/UeberMichContent";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Über mich · Andy Böhme",
  description:
    "Ich war Weltmeister im Skeleton und betreute die deutschen Biathletinnen bei zwei Olympischen Spielen. Heute behandle ich als Sportphysiotherapeut und Heilpraktiker in meiner Praxis INNNatur in Mühldorf am Inn.",
};

export default function UeberMichPage() {
  return (
    <>
      <UeberMichContent />
      <ContactSection />
    </>
  );
}
