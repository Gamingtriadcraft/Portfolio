"use client";

import Galaxy from "@/components/Galaxy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Music from "./music";

async function fetchInfo() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/779230704222339104",
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default function Page() {
  const [info, setInfo] = useState<any>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    fetchInfo().then((data) => {
      setInfo(data);
    });

    const interval = setInterval(() => {
      fetchInfo().then((data) => {
        setInfo(data);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInteraction = () => {
    setHasInteracted(true);
    setTimeout(() => setShowContent(true), 100);
  };

  const skils = [
    { name: "Javascript", icon: "devicon-javascript-plain", percentage: 45 },
    { name: "Linux", icon: "devicon-linux-plain", percentage: 56 },
    { name: "React", icon: "devicon-react-original", percentage: 49 },
    { name: "Typescript", icon: "devicon-typescript-plain", percentage: 36 },
    { name: "Python", icon: "devicon-python-plain", percentage: 26 },
  ];

  const projects = [
    {
      name: "Sparkle",
      description: "A Windows app to debloat and optimize your PC",
      tech: ["React", "Electron"],
      link: "https://parcoil.com/sparkle",
    },
    {
      name: "Dotline",
      description: "A modern crosshair overlay app for Windows/Linux",
      tech: ["Typescript", "Electron", "React"],
      link: "https://parcoil.com/dotline",
    },
    {
      name: "updatectrl",
      description: "A CLI Tool for automating project updates.",
      tech: ["Go", "Docker"],
      link: "https://github.com/parcoil/updatectrl",
    },
    {
      name: "Lunaar",
      description: "Unblocked Games website for school.",
      tech: ["JavaScript"],
      link: "https://github.com/parcoil/lunaar.org",
    },
  ];

  // const socials = [
  //   { name: "GitHub", icon: "devicon-github-original", link: "#" },
  //   { name: "Discord", icon: "devicon-discord-plain", link: "#" },
  //   { name: "Twitter", icon: "devicon-twitter-original", link: "#" },
  // ];

  const user = info?.data.discord_user;
  const activities = info?.data.activities || [];
  const spotify = info?.data.spotify;

  const getElapsedTime = (timestamps: any) => {
    if (!timestamps?.start) return null;
    const elapsed = Date.now() - timestamps.start;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1.5}
        repulsionStrength={0.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={152}
        //@ts-ignore
        className="fixed inset-0 pointer-events-none"
      />

      {!hasInteracted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-20">
          <button
            onClick={handleInteraction}
            className="px-8 py-4 text-2xl font-bold bg-primary/20 hover:bg-primary/30 border-2 border-primary/50 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Enter
          </button>
        </div>
      )}

      {info && hasInteracted && (
        <div
          className={`relative z-10 flex flex-col items-center py-12 px-4 gap-8 transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-[300px] h-[300px] border-primary/20 border-2">
              <AvatarImage
                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`}
                alt={user.username}
              />
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
            <p className="text-4xl font-bold ml-23">
              Hi, I'm <span className="text-primary">Dantae</span>
              <span className="text-secondary text-sm ml-2  mt-3">
                ({user.display_name})
              </span>
            </p>
            <p className="text-xl text-gray-300">Frontend Developer</p>

            <div className="flex gap-2 items-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  info?.data.discord_status === "online"
                    ? "bg-green-500"
                    : info?.data.discord_status === "idle"
                      ? "bg-yellow-500"
                      : info?.data.discord_status === "dnd"
                        ? "bg-red-500"
                        : "bg-gray-500"
                }`}
              />
              <span className="text-sm text-gray-400 capitalize">
                {info?.data.discord_status || "offline"}
              </span>
            </div>
          </div>

          {/* <Card className="w-full max-w-4xl mx-auto p-4 bg-transparent backdrop-blur-sm border-primary/20">
            <CardHeader className="text-2xl font-bold ">About Me</CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                I'm Dantae, A frontend developer, I specialize in React and
                modern web technologies, always exploring new tools and
                frameworks. When I'm not coding, you'll find me customizing my
                Arch Linux setup or contributing to open-source projects.
              </p>
            </CardContent>
          </Card> */}

          {(spotify || activities.length > 0) && (
            <Card className="w-full max-w-4xl mx-auto p-4 bg-transparent backdrop-blur-sm border-primary/20">
              <CardHeader className="text-2xl font-bold">Currently</CardHeader>
              <CardContent className="space-y-4">
                {spotify && (
                  <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-primary/10">
                    <div className="relative flex-shrink-0">
                      <img
                        src={spotify.album_art_url}
                        alt={spotify.album}
                        className="w-24 h-24 rounded-lg shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-green-400 font-semibold mb-1 flex items-center gap-1">
                        <span className="animate-pulse">●</span> LISTENING TO
                        SPOTIFY
                      </p>
                      <h3 className="text-lg font-bold truncate mb-1">
                        {spotify.song}
                      </h3>
                      <p className="text-sm text-gray-400 truncate mb-2">
                        by {spotify.artist}
                      </p>
                      <p className="text-xs text-gray-500 truncate mb-2">
                        on {spotify.album}
                      </p>
                      {spotify.timestamps && (
                        <div className="space-y-1">
                          <div className="w-full bg-gray-700 rounded-full h-1">
                            <div
                              className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                              style={{
                                width: `${
                                  ((Date.now() - spotify.timestamps.start) /
                                    (spotify.timestamps.end -
                                      spotify.timestamps.start)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{getElapsedTime(spotify.timestamps)}</span>
                            <span>
                              {formatDuration(
                                spotify.timestamps.end -
                                  spotify.timestamps.start,
                              )}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activities
                  .filter((a: any) => a.type !== 2)
                  .map((activity: any, index: number) => {
                    const largeImage = activity.assets?.large_image;
                    const smallImage = activity.assets?.small_image;
                    const appId = activity.application_id;

                    const largeImageUrl = largeImage?.startsWith("mp:")
                      ? largeImage.replace(
                          "mp:",
                          "https://media.discordapp.net/",
                        )
                      : largeImage?.startsWith("http")
                        ? largeImage
                        : appId && largeImage
                          ? `https://cdn.discordapp.com/app-assets/${appId}/${largeImage}.png`
                          : null;

                    const smallImageUrl = smallImage?.startsWith("mp:")
                      ? smallImage.replace(
                          "mp:",
                          "https://media.discordapp.net/",
                        )
                      : smallImage?.startsWith("http")
                        ? smallImage
                        : appId && smallImage
                          ? `https://cdn.discordapp.com/app-assets/${appId}/${smallImage}.png`
                          : null;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-black/30 rounded-lg border border-primary/10"
                      >
                        <div className="relative flex-shrink-0">
                          {largeImageUrl ? (
                            <img
                              src={largeImageUrl}
                              alt={activity.name}
                              className="w-24 h-24 rounded-lg shadow-lg object-cover"
                            />
                          ) : (
                            <div className="w-24 h-24 rounded-lg bg-gray-800 flex items-center justify-center text-4xl"></div>
                          )}
                          {smallImageUrl && (
                            <img
                              src={smallImageUrl}
                              alt="Status"
                              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-black"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-primary font-semibold mb-1 flex items-center gap-1">
                            <span className="animate-pulse">●</span> PLAYING
                          </p>
                          <h3 className="text-lg font-bold truncate mb-1">
                            {activity.name}
                          </h3>
                          {activity.details && (
                            <p className="text-sm text-gray-400 truncate">
                              {activity.details}
                            </p>
                          )}
                          {activity.state && (
                            <p className="text-sm text-gray-400 truncate">
                              {activity.state}
                            </p>
                          )}
                          {activity.timestamps?.start && (
                            <p className="text-xs text-gray-500 mt-2">
                              {getElapsedTime(activity.timestamps)} elapsed
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
          )}

          <Card className="w-full max-w-4xl mx-auto p-4 bg-transparent backdrop-blur-sm border-primary/20">
            <CardHeader className="text-2xl font-bold ">
              Languages & Tools
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-6">
              {skils.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 w-24 sm:w-28"
                >
                  <i
                    className={`${skill.icon} text-2xl`}
                    aria-hidden="true"
                  ></i>
                  <p className="text-sm font-medium text-center">
                    {skill.name}
                  </p>
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

          <Card className="w-full max-w-4xl mx-auto p-4 bg-transparent backdrop-blur-sm border-primary/20">
            <CardHeader className="text-2xl font-bold">Projects</CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="p-4 border border-primary/20 rounded-lg hover:border-primary/40 transition-all hover:scale-105 bg-black/20"
                >
                  <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* <Card className="w-full max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-sm border-primary/20">
            <CardHeader className="text-2xl font-bold mb-4">
              Connect With Me
            </CardHeader>
            <CardContent className="flex justify-center gap-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="flex flex-col items-center gap-2 p-4 border border-primary/20 rounded-lg hover:border-primary/40 transition-all hover:scale-110"
                >
                  <i className={`${social.icon} text-3xl`}></i>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </CardContent>
          </Card> */}
          <div className="w-full max-w-4xl mx-auto space-y-4 pb-8">
            <Card className="bg-transparent backdrop-blur-sm border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/graduation.jpg"
                    alt="Bittersweet Poetry"
                    className="w-16 h-16 rounded-lg shadow-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-primary/80 font-semibold mb-1 flex items-center gap-1">
                      {/* <span className="animate-pulse">♪</span>*/} Background
                      Music
                    </p>
                    <p className="text-sm font-bold truncate">
                      Bittersweet Poetry (Instrumental)
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      Kanye West · Graduation
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary/60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-gray-500 text-sm">
              <p>© 2025 {user.display_name}. Built with React & Next.js</p>
            </div>
          </div>
          {/* 
          <div className="text-center text-gray-500 text-sm py-8">
            <p>© 2025 {user.display_name}. Built with React & Next.js</p>
          </div> */}
        </div>
      )}

      {hasInteracted && <Music />}
    </div>
  );
}
