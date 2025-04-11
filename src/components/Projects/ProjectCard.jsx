import { Link } from "react-router";

function ProjectCard({ project, index }) {
  const {
    photo,
    title,
    description,
    tags,
    visitPageLink,
    viewCodeLink,
    isCompleted,
  } = project;

  const orientation = index % 2 === 0 ? "left" : "right";

  const hoverAnimationEffect = `${index % 2 === 0 ? "hover:-rotate-[0.5deg]" : "hover:rotate-[0.5deg]"} bg-zinc-900 ring-1 ring-white/20 transition-all duration-300 ease-in-out hover:scale-105  hover:bg-zinc-800 hover:ring-white`;

  return (
    <section
      className={` ${hoverAnimationEffect} relative grid grid-cols-2 rounded-lg border-1 border-white/10 text-left`}
    >
      <div
        className={`${orientation === "left" ? "-left-10 order-first" : "-right-10 order-last"} relative`}
      >
        <img
          src={photo}
          alt="choreSite website made by Andrew Duong"
          className={`h-full scale-115 rounded-xl border-1 border-white object-cover`}
        />
        {!isCompleted && (
          <p
            className={`${orientation === "left" ? "-left-22 -rotate-10" : "-right-22 rotate-10"} absolute -top-10 rounded-lg bg-red-500 px-2 py-1 font-semibold`}
          >
            Under Development
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 px-4 py-4">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex flex-grow items-center">
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 px-1">
          {tags.map((tag) => (
            <p className="rounded-xl bg-zinc-700 px-2 py-1 font-semibold">
              {tag}
            </p>
          ))}
        </div>
        <div className="flex justify-evenly">
          {visitPageLink && (
            <Link
              className="rounded-lg px-2 py-1 font-semibold hover:bg-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
              to={visitPageLink}
            >
              Visit Page
            </Link>
          )}
          <Link
            className="rounded-lg px-2 py-1 font-semibold hover:bg-yellow-500"
            target="_blank"
            rel="noopener noreferrer"
            to={viewCodeLink}
          >
            View Code
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
