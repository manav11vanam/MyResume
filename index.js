const skills = ["Python", "HTML", "Bootstrap", "CSS", "JavaScript", "NodeJS", "MongoDB"];

const skillsDiv = document.getElementById("skills");
for (let skill of skills) {
  let elem = document.createElement("span");
  elem.textContent = skill;
  elem.classList.add("skills");
  skillsDiv.append(elem);
}

const courses = [
  { title: "Git and Github", by: "Google", on: "Coursera" },
  { title: "Using Python to Interact with OS", by: "Google", on: "Coursera" },
  {
    title: "Python for Everybody Specialization (5 Courses)",
    by: "Py4e, Dr. Charles Severance",
    on: "Coursera",
  },
  { title: "Complete Web Development Bootcamp, 2022", by: "Colt Steele", on: "Udemy" },
];

const coursesDiv = document.getElementById("courses");
for (let course of courses) {
  let div = document.createElement("div");
  div.setAttribute("data-aos", "fade-up");
  let h5 = document.createElement("h5");
  h5.textContent = course.title;
  let p = document.createElement("p");
  p.classList.add("mb-1");
  p.textContent = `By ${course.by}`;
  let p2 = document.createElement("p");
  p2.classList.add("text-muted");
  p2.textContent = `Course On: ${course.on}`;
  let br = document.createElement("br");
  div.append(h5);
  div.append(p);
  div.append(p2);
  div.append(br);
  coursesDiv.append(div);
}

const projects = [
  {
    title: "Secure Notepad App API (Mini Project)",
    description:
      "This is a simple notes application with login functionality. Users will be given a login credentials and using that they can access their notes. They can store up to 10 notes containing a title and content.",
    size: 1,
    link: "https://secure-notepad-app-api.herokuapp.com/",
  },
  {
    title: "Jodi: A Blind Dating Website (Mini Project)",
    description:
      "Jodi was created with the intention to revive blind dating since in today's superficial world we judge people on a lot of factors even before we really get to know them.",
    size: 2,
    link: "https://github.com/curry-dev/jodi",
  },
  {
    title: "Command Line Hangman Game in Python",
    description: "A simple command line multiplayer hangman game.",
    size: 1,
    link: "https://github.com/manav11vanam/CLI-Python-Hangman",
  },
  {
    title: "Amazekart (Mini Project)",
    description: "E-Commerce website to sell products.",
    size: 4,
    link: "https://github.com/curry-dev/amazekart",
  },
];
let projectsDiv = document.getElementById("projects");
for (let project of projects) {
  let div = document.createElement("div");
  div.setAttribute("data-aos", "fade-up");
  let h5 = document.createElement("h5");
  let a = document.createElement("a");
  a.href = project.link;
  a.target = "_blank";
  a.textContent = project.title;
  h5.append(a);
  let p = document.createElement("p");
  p.classList.add("mb-1");
  p.textContent = project.description;
  let p2 = document.createElement("p");
  p2.classList.add("text-muted");
  p2.textContent = `Team Size: ${project.size}`;
  let br = document.createElement("br");
  div.append(h5);
  div.append(p);
  div.append(p2);
  div.append(br);
  projectsDiv.append(div);
}

// var options = {
//   //   strings: ["", "Hi, I am Manav, an aspiring Web Developer and Python Enthusiast"],
//   typeSpeed: 40,
// };

// var typed = new Typed(".typed-text", options);

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 25,
});

// "https://docs.google.com/forms/d/e/1FAIpQLSdrfmzlaqV8tyBHko-J21-mrWoNRHiypSxkEBEVB5ABmeVmFw/viewform?usp=pp_url&entry.2005620554=Manav&entry.1045781291=manav@gmail.com&entry.1065046570=Feedback&entry.839337160=Hello+World"
