import { useState } from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaCcStripe,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiPostman,
  SiPayhip,
  SiJsonwebtokens,
} from "react-icons/si";
import SkillItem from "@/components/skillsItem/SkillItem";
import "@/components/skills/Skills.scss";

function Skills() {
  const skills = [
    { name: "Angular", icon: FaAngular, type: "front", color: "#F51649" },
    { name: "React", icon: FaReact, type: "front", color: "#00b2ff" },
    { name: "NodeJS", icon: FaNodeJs, type: "back", color: "green" },
    { name: "MongoDB", icon: SiMongodb, type: "back", color: "green" },
    { name: "TypeScript", icon: SiTypescript, type: "tools", color: "#006dff" },
    {
      name: "Postman",
      icon: SiPostman,
      type: "tools",
      color: "#fd9304",
    },
    { name: "Figma ", icon: FaFigma, type: "tools", color: "purple" },
    { name: "Git", icon: FaGitAlt, type: "tools", color: "#F34F29" },
    { name: "GitHub", icon: FaGithub, type: "tools", color: "" },
    { name: "Payhip", icon: SiPayhip, type: "tools", color: "#7883E6" },
    {
      name: "Json Web Tokens",
      icon: SiJsonwebtokens,
      type: "tools",
      color: "",
    },
    { name: "Stripe", icon: FaCcStripe, type: "tools", color: "#7883E6" },
  ];

  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  const [filtred, setFiltred] = useState(sortedSkills);

  function filtredSkills(type) {
    if (type === "all") setFiltred(sortedSkills);
    else setFiltred(sortedSkills.filter((skill) => skill.type === type));
  }

  function searchSkills(evt) {
    const target = evt.target.value.trim().toLowerCase();
    if (target.length < 3) {
      setFiltred(sortedSkills);
    } else if (target.length >= 3) {
      setFiltred(
        sortedSkills.filter((skill) =>
          skill.name.toLowerCase().includes(target)
        )
      );
    }
  }

  return (
    <section>
      <h3>Technologies</h3>
      <div>
        <label htmlFor="search"></label>
        <input
          type="search"
          name="search"
          id="search"
          onChange={(evt) => searchSkills(evt)}
        />
      </div>
      <div className="buttons-bar">
        <button onClick={() => filtredSkills("all")}>Tous</button>
        <button onClick={() => filtredSkills("tools")}>Outils</button>
        <button onClick={() => filtredSkills("front")}>Front end</button>
        <button onClick={() => filtredSkills("back")}>Back end</button>
      </div>
      <div className="items-container">
        {filtred.map((item, index) => (
          <SkillItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
