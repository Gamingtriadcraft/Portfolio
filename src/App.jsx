import { themeChange } from "theme-change";
import { useEffect } from "react";
import "./App.css";
import Theme from "./assets/components/Theme";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  const Skills = [
    { id: 1, name: "HTML", percentage: 100, image: "devicon-html5-plain" },
    { id: 2, name: "React", percentage: 70, image: "devicon-react-original" },
    {
      id: 3,
      name: "Tailwind",
      percentage: 87,
      image: "devicon-tailwindcss-original",
    },
    {
      id: 4,
      name: "JavaScript",
      percentage: 80,
      image: "devicon-javascript-plain",
    },
    { id: 5, name: "CSS", percentage: 90, image: "devicon-css3-plain" },
    { id: 6, name: "Python", percentage: 90, image: "devicon-python-plain" },
    { id: 7, name: "Linux", percentage: 79, image: "devicon-linux-plain" },
    { id: 8, name: "C#", percentage: 40, image: "devicon-csharp-plain" },
    { id: 9, name: "Vue", percentage: 25, image: "devicon-vuejs-plain" },
    { id: 10, name: "C++", percentage: -69, image: "devicon-cplusplus-plain" },
  ];

  const Things = [
    {
      id: 1,
      name: "Lunaar.org",
      description: "A simple open-source unblocked gaming site",
      link: "https://github.com/parcoil/lunaar.org",
    },
    {
      id: 2,
      name: "Starlight",
      description: "Unblocked games site",
      link: "https://github.com/parcoil/starlight",
    },
    {
      id: 3,
      name: "Autoclicker",
      description: "A simple autoclicker made in c#",
      link: "https://github.com/thedogecraft/autoclicker",
    },
    {
      id: 4,
      name: "CloakJS",
      description:
        "lightweight JavaScript library designed for easy tab cloaking. (WIP)",
      link: "https://github.com/Parcoil/cloak",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center min-h-screen bg-base-200 p-5">
        <div className="avatar mb-4">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/tiktokpfp.png" alt="Profile" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-2">Hi, I'm Doge</h1>
        <p className="text-2xl text-base-content mb-6">About me </p>
        <p className="text-3xl sm:text-base md:text-3xl lg:text-4xl text-center align-middle leading-8 text-wrap">
          Hey, my name is Dantae. I’m 14 years old, and I’m a full-stack web
          developer and game site owner. I also love FOSS apps.
        </p>

        <p className="text-2xl text-base-content m-6">Skills</p>

        <div className="Skills flex flex-wrap justify-center gap-4">
          {Skills.map((skill) => (
            <div key={skill.id} className="card w-64 bg-base-100 shadow-xl p-4">
              <i className={skill.image} />
              <p className="text-xl font-semibold text-base-content">
                {skill.name}
              </p>
              <progress
                className="progress progress-primary w-full mt-2"
                value={skill.percentage}
                max="100"
              ></progress>
              <p className="text-base-content mt-1">{skill.percentage}%</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-2xl text-base-content m-6">Projects</h1>

          <div className="things flex flex-wrap justify-center gap-4 text-center">
            {Things.map((thing) => (
              <div
                key={thing.id}
                className="card btn w-64 bg-base-100 shadow-xl p-4 justify-center p-10"
              >
                <a href={thing.link}>
                  <p className="text-xl font-semibold text-base-content">
                    {thing.name}
                  </p>
                  <p className="text-base-content mt-1">{thing.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p>Theme</p>
          <Theme />
        </div>
      </div>
    </>
  );
}

export default App;
