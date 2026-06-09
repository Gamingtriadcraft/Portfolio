import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

async function getDiscordAvatar() {
  try {
    const res = await fetch(
      "https://api.lanyard.rest/v1/users/779230704222339104",
      { next: { revalidate: 3600 } },
    );
    const data = await res.json();
    const user = data.data.discord_user;
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const avatarUrl = await getDiscordAvatar();

return {
    title: "Omar.rest",
    description: "67",
    icons: avatarUrl ? {
        icon: avatarUrl,
        shortcut: avatarUrl,
        apple: avatarUrl,
    } : undefined,
};
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>
            <body className={`${poppins.variable} ${firaCode.variable} antialiased dark`}>
                {children}
            </body>
        </html>
    );
}