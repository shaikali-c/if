import { ArrowUpRight, ChevronRight, Github, LucideGithub } from "lucide-react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";

const cgFont = Cormorant_Garamond({ subsets: ["latin"] });
const interFont = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex justify-center">
      <section className="md:w-[80%] border-x-0 md:border-x-1 border-neutral-900 min-h-screen">
        <header
          className={`p-8 md:p-15 text-2xl ${cgFont.className} flex justify-between`}
        >
          <h2>Cygnus</h2>
          <Link
            className={`${interFont.className} flex items-center text-base hover:underline gap-1 text-neutral-400`}
            href={"https://github.com/shaikali-c"}
          >
            Github
            <ChevronRight size={20} />
          </Link>
        </header>
        <main
          className={`flex justify-center flex-col text-center gap-3 mt-20 ${interFont.className}`}
        >
          <header className={`text-4xl md:text-6xl ${cgFont.className}`}>
            <h2>Predict Early.</h2>
            <h2>Prevent Damage.</h2>
          </header>
          <p className="m-auto max-w-130 text-neutral-400 px-8">
            An AI-powered tool that forecasts floods before they strike, giving
            you time to prepare and stay safe. Simple, smart, and built to
            protect communities.
          </p>

          <Link
            className="bg-sky-600 w-fit m-auto py-2.5 my-2 px-8 rounded-sm flex items-center gap-1"
            href={"/map"}
          >
            Get Started
            <ArrowUpRight size={20} />
          </Link>
          <section className="flex justify-center gap-0 mt-0 scale-55 md:scale-100 md:mt-8">
            <img
              className="h-90 object-cover w-45 md:w-60 -rotate-15 mt-10 rounded-xl border-2 border-neutral-950"
              src="https://cdn.prod.website-files.com/6345207a1b18e581fcf67604/670e3dea0cb52a27ed7d66d5_1%20Space-time%20hotspot%20analysis.png"
            />
            <img
              className="h-90 object-cover w-60 md:w-80 z-100 rounded-xl border-2 border-neutral-950"
              src="https://i.pinimg.com/originals/61/92/bc/6192bc1d7b0a75ddd65e828184a0dc80.gif"
            />
            <img
              className="h-90 object-cover w-45 md:w-60 rotate-15 mt-10 rounded-xl border-2 border-neutral-950"
              src="https://images.squarespace-cdn.com/content/v1/59b82daff14aa11bc9910930/1533059439260-2Q4S9FSUNR3S79QF4293/NYCmap1.png"
            />
          </section>
        </main>
      </section>
    </section>
  );
}
