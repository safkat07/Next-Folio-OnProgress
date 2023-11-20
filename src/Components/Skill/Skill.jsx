import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skill.css";
const Skill = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend></Frontend>
        <Backend></Backend>
      </div>
    </section>
  );
};

export default Skill;
