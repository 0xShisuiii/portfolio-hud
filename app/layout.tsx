import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { AchievementsProvider } from "@/components/AchievementsProvider";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Arijeet Ghosh — Software Engineer",
  description:
    "Software engineer — React Native & full-stack. Agentic AI, MCP servers, billing platforms and web3 infrastructure.",
  openGraph: {
    title: "Arijeet Ghosh — Software Engineer",
    description: "React Native & full-stack engineer. Agents, MCP, billing, web3.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07090c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`}>
      <body>
        <AchievementsProvider>{children}</AchievementsProvider>
      </body>
    </html>
  );
}
