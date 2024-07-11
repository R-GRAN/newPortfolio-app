import "@/components/skillsItem/SkillItem.scss";

function SkillItem({item}) {
  return (
   
    <article className="card-item">
  
       <item.icon className="card-item-icon" color={item.color} /> 

      <h2>{item.name}</h2>
    </article>
  );
}

export default SkillItem;
