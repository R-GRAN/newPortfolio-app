import "@/components/skillsItem/SkillItem.scss";

function SkillItem({item}) {
  return (
   
    <article className="card-item">
  
       <item.icon className="card-item-icon" color={item.color} /> 

      <span>{item.name}</span>
    </article>
  );
}

export default SkillItem;
