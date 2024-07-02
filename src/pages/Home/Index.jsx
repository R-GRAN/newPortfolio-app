import Presentation from "@/components/presentation/Presentation";
import Projets from "@/components/projects/Projects";
import ContactForm from "@/components/contactForm/ContactForm";
import Playground from "@/components/playground/Playground";

function Home() {
  return (
    <>
      <Presentation />
      <Projets />
      <Playground />
      <ContactForm />
    </>
  );
}

export default Home;
