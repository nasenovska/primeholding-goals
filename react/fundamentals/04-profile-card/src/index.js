import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profileInfo = {
  name: "Jonas Schmedtmann",
  avatar:
    "https://devreso.com/wp-content/uploads/2022/04/html-css-courses-3.jpg",
  intro:
    "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), ot to just enjoy the Portuguese sun at the beach.",
  skills: [
    {
      name: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      name: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      name: "Web Desgin",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      name: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      name: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      name: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ],
};

function App() {
  return (
    <div className="card">
      <Avatar name={profileInfo.name} src={profileInfo.avatar} />
      <div className="data">
        <Intro name={profileInfo.name} intro={profileInfo.intro} />
        <SkillList skills={profileInfo.skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.src} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  const background = skill.color ?? "red";
  return (
    <div className="skill" style={{ background: background }}>
      <span>{skill.name}</span>
      <Emoji level={skill.level} />
    </div>
  );
}

function Emoji({ level }) {
  if (level === "advanced") {
    return <span>{"💪"}</span>;
  } else if (level === "intermediate") {
    return <span>{"👍"}</span>;
  } else {
    return <span>{"👶🏼"}</span>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
