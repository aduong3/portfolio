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
      className={` ${hoverAnimationEffect} relative grid grid-cols-1 rounded-lg border-1 border-white/10 text-left lg:grid-cols-2`}
    >
      <div
        className={`${orientation === "left" ? "lg:-left-10 lg:order-first" : "lg:-right-10 lg:order-last"} relative`}
      >
        {photo && (
          <img
            src={photo}
            alt={`${title} project screenshot`}
            className={`h-full rounded-xl border-1 border-white object-cover lg:scale-115`}
          />
        )}
        {!photo && (
          <p className="flex h-full min-h-30 items-center justify-center rounded-xl border-1 border-white bg-red-600 text-center text-xl md:text-2xl lg:scale-115">
            Still Under Development!
          </p>
        )}
        {!isCompleted && (
          <p
            className={`${orientation === "left" ? "lg:-left-22 lg:-rotate-10" : "lg:-right-22 lg:rotate-10"} absolute top-0 rounded-lg bg-red-500 px-2 py-1 font-semibold lg:-top-10`}
          >
            Under Development
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 px-4 py-3">
        <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
        <div className="flex flex-grow items-center">
          <p className="hidden md:block">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 px-1">
          {tags.map((tag) => (
            <p
              className="rounded-xl bg-zinc-700 px-2 py-1 text-sm font-semibold md:text-base"
              key={tag}
            >
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
          {viewCodeLink && (
            <Link
              className="rounded-lg px-2 py-1 font-semibold hover:bg-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
              to={viewCodeLink}
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
