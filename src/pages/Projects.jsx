import { Link } from "react-router";
import choreSitePhoto from "../assets/choreSite.png";
import portfolioPhoto from "../assets/portfolioWebsite.png";

function Projects() {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid grid-cols-2 gap-4 overflow-hidden rounded-lg border-1 border-white">
        <img
          src={choreSitePhoto}
          alt="choreSite website made by Andrew Duong"
          className="h-full border-r-1 border-white object-cover"
        />
        <div className="flex flex-col gap-3 py-4">
          <h1 className="text-3xl">choreTracker</h1>
          <div className="flex flex-grow items-center">
            <p>
              I created choreTracker to help track chores and control impulse
              purchases by rewarding myself with points.Completing tasks earns
              points, and I can redeem them for rewards I set. It also provides
              an intuitive interface to easily manage and monitor progress on
              tasks, helping me stay on track with my goals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 px-1">
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              JavaScript
            </p>
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              React
            </p>
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              Node.js
            </p>
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              Express.js
            </p>
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              Postman
            </p>
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              MongoDB
            </p>
          </div>
          <div className="flex justify-evenly">
            <Link>Visit Page</Link>
            <Link>View Code</Link>
          </div>
        </div>
      </section>
      <section className="grid auto-rows-auto grid-cols-2 gap-4 overflow-hidden rounded-lg border-1 border-white">
        <img
          src={portfolioPhoto}
          alt="Portfolio website made by Andrew Duong"
          className="h-full border-r-1 border-white object-cover"
        />
        <div className="flex flex-col gap-3 py-4">
          <h1 className="text-3xl">Portfolio Website</h1>
          <div className="flex flex-grow items-center">
            <p>Some sort of text about the Portfolio Website</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 px-1">
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              JavaScript
            </p>
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              React
            </p>
          </div>
          <div className="flex justify-evenly">
            <Link>View Code</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
