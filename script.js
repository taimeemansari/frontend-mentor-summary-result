const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: "red",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: "yellow",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "teal",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: "blue",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  let summaryResults = document.querySelector("#summaryResults");
  let temp = document.getElementsByTagName("template")[0];

  data.forEach((subject) => {
    let { category, color, icon, score } = subject;
    let clon = temp.content.cloneNode(true);
    clon.querySelector(".result").classList.add(`bg-${color}200`);
    clon.querySelector(".result img").setAttribute("src", icon);
    clon.querySelector(".subjectName").classList.add(`text-${color}`);
    clon.querySelector(".subjectName").textContent = category;
    clon.querySelector(".score").textContent = score;
    summaryResults.appendChild(clon);
  });
});
