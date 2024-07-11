import Presentation from "@/components/presentation/Presentation";
import Projets from "@/components/projects/Projects";
import ContactForm from "@/components/contactForm/ContactForm";
import Playground from "@/components/playground/Playground";
import Skills from "@/components/skills/Skills";
import { useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";

function Home() {
  const { fakeToken } = useContext(TokensContext);
  return (
    <>
      <Presentation />
      <Projets />
      <Skills />
      {!fakeToken ? <Playground /> : ""}
      <ContactForm />
    </>
  );
}

export default Home;
