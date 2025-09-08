"use client";
import Galaxy from "@/components/Galaxy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { icons } from "lucide-react";
import { useEffect, useState } from "react";

async function fetchInfo() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/779230704222339104"
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default function Page() {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    fetchInfo().then((data) => {
      setInfo(data);
      console.log(data);
    });
  }, []);

  if (!info) {
    return <div>Loading...</div>;
  }

  const user = info.data.discord_user;

  const skils = [
    {
      name: "Javascript",
      icon: "devicon-javascript-plain",
      percentage: 40,
    },
    {
      name: "HTML",
      icon: "devicon-html5-plain",
      percentage: 90,
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain",
      percentage: 80,
    },
    {
      name: "Linux",
      icon: "devicon-linux-plain",
      percentage: 56,
    },
    {
      name: "React",
      icon: "devicon-react-original",
      percentage: 49,
    },
    {
      name: "Arch Linux",
      icon: "devicon-archlinux-plain",
      percentage: 70,
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain",
      percentage: 25,
    },
    {
      name: "Python ",
      icon: "devicon-python-plain",
      percentage: 20,
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1.5}
        repulsionStrength={0.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={140}
        //@ts-ignore
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <Avatar className="w-[300px] h-[300px] border-primary/20 border-2 ">
          <AvatarImage
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`}
            alt={user.username}
          />
          <AvatarFallback>{user.username[0]}</AvatarFallback>
        </Avatar>
        <p className="text-4xl font-bold">
          Hi im, <span className="text-primary">{user.display_name}</span>
        </p>
        <p>a frontend developer</p>
        <Card className="w-full max-w-4xl mx-auto p-4 bg-transparent backdrop-blur-sm border-primary/20">
          <CardHeader className="text-2xl font-bold mb-4">Languages</CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-6">
            {skils.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 w-24 sm:w-28"
              >
                <i className={`${skill.icon} text-2xl`} aria-hidden="true"></i>
                <p className="text-sm font-medium text-center">{skill.name}</p>
                <div className="w-full">
                  <Progress value={skill.percentage} className="w-full" />
                </div>
                <p className="text-sm font-medium text-gray-500">
                  {skill.percentage}%
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
