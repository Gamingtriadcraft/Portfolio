import React from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";
function Home() {
  const skills = [
    {
      name: "HTML",
      persentage: "100",
      icon: "devicon-html5-plain",
    },
    {
      name: "CSS",
      persentage: "80",
      icon: "devicon-css3-plain",
    },
    {
      name: "JavaScript",
      persentage: "65",
      icon: "devicon-javascript-plain",
    },
    {
      name: "NodeJS",
      persentage: "55",
      icon: "devicon-nodejs-plain",
    },
    {
      name: "React",
      persentage: "44",
      icon: "devicon-react-original",
    },
    {
      name: "Arch Linux",
      persentage: "55",
      icon: "devicon-archlinux-plain",
    },
    {
      name: "Framework7",
      persentage: "41",
      icon: "devicon-framework7-original",
    },
    {
      name: "Python",
      persentage: "30",
      icon: "devicon-python-plain",
    },
    {
      name: "Typescript",
      persentage: "-2000",
      icon: "devicon-typescript-plain",
    },
  ];

  const projects = [
    {
      name: "Lunaar",
      description: "The Ultimate Unblocked games site!",
      link: "https://lunaar.org",
      image: "/lunaar.png",
    },
    {
      name: "Moonlight",
      description: "a unblocked games site!",
      link: "https://moonlight.silvereen.net/",
      image: "/moonlight.png",
    },
  ];

  return (
    <div className="mt-5 mb-5 ml-[200px] mr-[200px]">
      <div className="flex absolute right-0 mt-6 mr-56">
        <h1 className="text-accent text-8xl font-bold">Hello!</h1>
      </div>

      <div className="flex mb-10 flex-row ml-10 mt-5">
        <img src="/tiktokpfp.png" className="rounded-full w-40 "></img>
      </div>
      <div className="card bg-base-300 p-[30px] m-7">
        <h1 className="text-3xl font-bold text-primary">About Me</h1>
        <p>Hello, I'm a web developer. and i dont know what to put here.</p>
      </div>
      <div className="card bg-base-300 p-[30px] m-7">
        <h1 className="text-3xl font-bold text-secondary">Skills</h1>
        <div className="flex flex-wrap gap-7 flex-row items-center justify-center mt-3">
          {skills.map((skill) => (
            <div className="card flex w-40">
              <i className={skill.icon}></i>
              <h1>{skill.name}</h1>
              <progress
                className="progress progress-accent"
                value={skill.persentage}
                max={100}
              ></progress>
              <p>{skill.persentage}%</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card bg-base-300 p-[30px] m-7">
        <h1 className="text-3xl font-bold text-warning">Projects</h1>
        <div className="flex gap-5 mt-3">
          {projects.map((project) => (
            <div className="card bg-base-100 p-4 w-max h-max flex transition-all active:scale-[.99] hover:scale-[1.01]">
              <a href={project.link}>
                <img src={project.image} className="rounded-xl" />
                <h1 className="text-2xl mt-4"> {project.name}</h1>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="card bg-base-300 p-[30px] m-7">
        <h1 className="text-3xl font-bold text-success">Contact & More</h1>
        <div className="flex gap-2 text-2xl mt-3">
          <div className="bg-slate-900 rounded-full p-2 btn btn-circle text-2xl hover:bg-slate-900">
            <FaGithub />
          </div>
          <div className="bg-indigo-700 rounded-full p-2 btn btn-circle text-2xl hover:bg-indigo-900">
            <FaDiscord />
          </div>
          <a className="btn btn-circle hover:bg-base-100" href="/bio">
            BIO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
