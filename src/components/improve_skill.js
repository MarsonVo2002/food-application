export default function ImproveSkill() {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked"
]
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt=""></img>
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((skill, index) => (<p className="skill-item" key = {index}>{skill}</p>))}
        <button className="btn">signup now</button>
      </div>
    </div>
  );
}
