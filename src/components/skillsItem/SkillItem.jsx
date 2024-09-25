import "@/components/skillsItem/SkillItem.scss";

function SkillItem({ item }) {
  return (
    <article className="card-item">
      <item.icon
        className="card-item-icon"
        color={item.color}
        style={{ background: item.background ? "black" : "" }}
      />

      <span>{item.name}</span>
    </article>
  );
}

export default SkillItem;
