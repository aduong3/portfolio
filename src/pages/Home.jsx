import { Link } from "react-router";
import photo from "./../assets/Andrew_photo.png";

function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <section className="flex flex-col gap-3 text-left">
          <p className="text-6xl">
            Hey, I'm <span className="font-bold text-violet-500">Andrew</span>!
          </p>
          <p className="text-2xl">
            A{" "}
            <span className="font-bold text-red-500">Full-Stack Developer</span>{" "}
            that enjoys building creative solutions for everyday problems.
          </p>
        </section>
        <div className="relative">
          <div className="relative z-10 h-60 w-60 overflow-hidden rounded-full border-2 border-gray-50">
            <img
              src={photo}
              alt="Me In Japan"
              className="relative z-10 scale-140 object-top"
            />
          </div>
          <div className="absolute top-3 left-5 z-0 h-60 w-60 rounded-full bg-violet-500"></div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link
          to="/projects"
          className="inline-block rounded-md bg-yellow-400 px-3 py-2 font-bold text-black hover:scale-110"
        >
          View My Projects
        </Link>
        <Link className="inline-block rounded-md bg-yellow-400 px-3 py-2 font-bold text-black hover:scale-110">
          Test
        </Link>
      </div>
    </>
  );
}

export default Home;
