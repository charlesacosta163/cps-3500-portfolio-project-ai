import linkedInSvg from "@/public/images/linkedin.svg";
import flowerSvg from "@/public/images/flower.svg";

import blog1cover from "@/public/images/blog1cover.jpg";
import blog2cover from "@/public/images/blog2cover.jpg";

import iflyticsPng from "@/public/images/iflytics.png";
import iflyticsLogo from "@/public/images/iflytics.svg";
import weatherjunglePng from "@/public/images/weatherjungle.jpg";

import icodethisPng from "@/public/images/icodethis.png";
import htmlIcon from "@/public/images/html-5-svgrepo-com.svg";
import cssIcon from "@/public/images/cssnew.png";
import jsIcon from "@/public/images/javascript-svgrepo-com.svg";
import tsIcon from "@/public/images/typescript-official-svgrepo-com.svg";
import nextjsIcon from "@/public/images/next-js-svgrepo-com.svg";
import tailwindIcon from "@/public/images/tailwind-svgrepo-com.svg";
import stripeIcon from "@/public/images/stripe-v2-svgrepo-com.svg";
import nodejsIcon from "@/public/images/node-js-svgrepo-com.svg";
import reactIcon from "@/public/images/react-svgrepo-com.svg";
import supabaseIcon from "@/public/images/supabase-logo-icon.svg";
import expressIcon from "@/public/images/express-svgrepo-com.svg";

import Image from "next/image";
import { LuLink2, LuLinkedin, LuMail } from "react-icons/lu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 leading-8">
      <section id="about" className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight md:py-4">
          Hey! I'm Charles 🍰
        </h1>

        <p className="bg-[#fffbec] rounded-2xl p-4 text-lg font-medium mt-4 text-gray-700 leading-10">
          I’m a senior here at Kean University majoring in computer science,
          with a strong passion with software development that began in my first
          year of university. Since then, I’ve gone deep into JavaScript and
          full-stack development, spending most of my time building apps with
          the framework Next.js. Woocha! 🌊
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="https://www.linkedin.com/in/charles-acosta-11124125b/"
            className="bg-blue-50 p-4 rounded-2xl flex gap-4 items-center justify-between text-2xl font-bold tracking-tight transition-all hover:bg-blue-100"
          >
            <Image src={linkedInSvg} alt="LinkedIn" width={50} />
            <span className="text-blue-500">LinkedIn Page</span>
            <LuLink2 />
          </Link>

          <Link
            href="charlesac.dev"
            className="bg-orange-50 p-4 rounded-2xl flex gap-4 items-center justify-between text-2xl font-bold tracking-tight transition-all hover:bg-orange-100"
          >
            <Image src={flowerSvg} alt="Flower" width={50} />
            <span className="text-orange-400">Orange Juice</span>
            <LuLink2 />
          </Link>
        </div>

        <p id="blog" className="font-medium">
          I have also written content on my blog. You'll find writing about
          technologies I'm interested in at the time, or how I'm learning and
          growing in my career, sharing knowledge along the way.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="https://www.charlesac.dev/blog/3r6bgh2hLAhLMyJxCoaPUt"
            className="flex justify-between items-center gap-2 p-4 bg-[#fffbec] hover:bg-gray-50 rounded-2xl transition-all"
          >
            <section className="flex gap-4 items-center">
              <Image
                src={blog1cover}
                alt="blog 1"
                width={100}
                className="rounded"
              />
              <div className="flex flex-col">
                <h2 className="text-gray-700 font-semibold">
                  Coding Chronicles: My Journey and the Roadmap
                </h2>
                <p className="text-sm font-medium text-gray-600 text-left">
                  Posted Jul 2024
                </p>
              </div>
            </section>

          </Link>

          <Link
            href="https://www.charlesac.dev/blog/3r6bgh2hLAhLMyJxCoaPUt"
            className="flex justify-between items-center gap-2 p-4 bg-[#fffbec] hover:bg-gray-50 rounded-2xl transition-all"
          >
            <section className="flex gap-4 items-center">
              <Image
                src={blog2cover}
                alt="blog 2"
                width={100}
                className="rounded"
              />

              <div className="flex flex-col">
                <h2 className="text-gray-700 font-semibold">
                  3 Essential Books to Getting Started with Front-end
                  Development in 2024
                </h2>
                <p className="text-sm font-medium text-gray-600 text-left">
                  Posted Jul 2024
                </p>
              </div>
            </section>

          </Link>
        </div>
      </section>

      <section id="projects" className="flex flex-col gap-4">
        <h2 className="font-bold text-orange-400 text-xl">
          Here are my Projects 🍁
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 [&>div>section>h3]:text-[#89986D]">
          <div className="p-4 flex flex-col gap-4 rounded-2xl bg-[#fffbec]">
            <Image
              width={1000}
              src={iflyticsPng}
              alt="iflytics"
              className="rounded"
            />

            <section className="flex flex-col gap-4">
              <h3 className="font-bold tracking-tight text-2xl flex items-center gap-1">
                {" "}
                <Image src={iflyticsLogo} width={35} alt="iflytics" /> IFlytics
              </h3>

              <p className="leading-5 text-sm font-medium">
                IFlytics is a third-party, full-stack analytics platform for the
                flight simulator Infinite Flight. It lets users explore detailed
                stats, interactive flight maps, and in-depth flight insights.
                The app focuses on fast performance, data visualizations, and
                turning raw user flight data into meaningful insights for the
                Infinite Flight community.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  { name: "next js", icon: nextjsIcon },
                  { name: "react", icon: reactIcon },
                  { name: "tailwind", icon: tailwindIcon },
                  { name: "typescript", icon: tsIcon },
                  { name: "stripe", icon: stripeIcon },
                ].map((e, i) => {
                  return (
                    <Image key={e.name} src={e.icon} alt="icon" width={25} />
                  );
                })}
              </div>

              <Link
                href="iflytics.app"
                className="self-start bg-[#9CAB84] hover:bg-[#9CAB84]/50 transition-all text-white px-4 py-2 rounded-2xl flex gap-2 items-center font-semibold text-sm"
              >
                Website <LuLink2 />
              </Link>
            </section>
          </div>

          <div className="p-4 flex flex-col gap-4 rounded-2xl bg-[#fffbec]">
            <Image
              width={1000}
              src={weatherjunglePng}
              alt="weatherjungle"
              className="rounded"
            />

            <section className="flex flex-col gap-4">
              <h3 className="font-bold tracking-tight text-2xl">
                ⛅️ WeatherJungle
              </h3>

              <p className="leading-5 text-sm font-medium">
                WeatherJungle is a weather app that utilizes the OpenWeather
                API, search for different cities and towns and display their
                weather status.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  { name: "html", icon: htmlIcon },
                  { name: "css", icon: cssIcon },
                  { name: "js", icon: jsIcon },
                ].map((e, i) => {
                  return (
                    <Image key={e.name} src={e.icon} alt="icon" width={25} />
                  );
                })}
              </div>

              <Link
                href="https://icodethis.com/modes/design-to-code/318/submissions/257918"
                className="self-start bg-[#9CAB84] hover:bg-[#9CAB84]/50 transition-all text-white px-4 py-2 rounded-2xl flex gap-2 items-center font-semibold text-sm"
              >
                Website <LuLink2 />
              </Link>
            </section>
          </div>
        </section>

        <section className="col-span-2 p-4 flex flex-col gap-4 rounded-2xl bg-[#fffbec] self-start">
          <h3 className="font-bold tracking-tight text-2xl flex items-center gap-2 text-[#89986D]">
            <Image src={icodethisPng} alt="icodethis" width={35} /> UI
            Challenges
          </h3>

          <p className="leading-5 text-sm font-medium">
            In the early days of web development, I have done many mini UI
            challenges on the platform iCodeThis back in 2022-2023. Here you can
            find my front-end development work that utilize mainly HTML, CSS and
            JavaScript, and occasionally Tailwind CSS.
          </p>

          <Link
            href="https://icodethis.com/notcharlesa163"
            className="self-start bg-[#9CAB84] hover:bg-[#9CAB84]/50 transition-all text-white px-4 py-2 rounded-2xl flex gap-2 items-center font-semibold text-sm"
          >
            See My Work <LuLink2 />
          </Link>
        </section>
      </section>

      <section id="contact" className="bg-[#fffbec] p-8 rounded-2xl flex flex-col items-center">
            <h3 className="text-[#7a8960] font-black tracking-tight text-3xl">Let's Get In Touch!</h3>
            <p className="text-center text-gray-400 font-medium text-sm">You can contact me through my email or send me a message on LinkedIn 😇</p>

            <div className="flex gap-4 items-center mt-4">

              <a href="mailto:charlesacosta163@gmail.com" className="bg-[#9CAB84] hover:bg-[#7a8960]/75 text-white px-4 py-2 rounded-2xl font-semibold flex gap-2 items-center text-sm"><LuMail /> Email</a>
              <a href="https://www.linkedin.com/in/charles-acosta-11124125b/" className="bg-blue-500 hover:bg-blue-500/75 text-white px-4 py-2 rounded-2xl font-semibold flex gap-2 items-center text-sm"><LuLinkedin /> LinkedIn</a>
            </div>
      </section>

      <footer className="flex justify-between gap-2 items-center">
          <span className="text-sm text-gray-400">Portfolio Inspired by <Link href='https://leerob.com' className="underline font-medium">Lee Robinson</Link></span>
      </footer>
    </div>
  );
}
