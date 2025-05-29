import { Link } from "react-router";
import photo from "./../assets/Andrew_photo.png";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePageview } from "react-icons/md";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import SkillItems from "../components/About/SkillItems";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <section className="flex flex-col gap-2 px-2 text-center md:gap-5 lg:px-0 lg:text-left">
          <h1 className="text-3xl lg:text-5xl">
            Hey, I'm{" "}
            <span className="font-bold text-violet-500">Andrew Duong</span>!
          </h1>
          <h4 className="text-lg font-bold text-red-500 lg:text-xl">
            Full-Stack Developer
          </h4>
          <p className="text-md lg:text-lg">
            I enjoy creating random solutions that make some aspect of everyday
            life better.
          </p>
        </section>
        <section className="relative my-6 lg:my-0">
          <div className="relative z-10 h-60 w-60 overflow-hidden rounded-full border-2 border-gray-50">
            <img
              src={photo}
              alt="Andrew Duong, a full-stack developer in Japan."
              className="relative z-10 scale-125 object-top"
            />
          </div>
          <div className="absolute top-3 left-5 z-0 h-60 w-60 rounded-full bg-violet-500"></div>
          <div className="absolute bottom-0 left-12 z-12 flex items-center gap-2 rounded-lg bg-green-500 px-3 py-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-100"></div>
            <span className="font-bold">Open To Work</span>
          </div>
        </section>
      </div>
      <section className="flex justify-center gap-5 lg:justify-normal lg:gap-8">
        <Link
          to="/projects"
          className="flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 font-bold text-black transition duration-400 ease-in-out hover:scale-110"
        >
          <MdOutlinePageview className="text-xl" />
          Projects
        </Link>
        <a
          href="/Andrew_Resume.pdf"
          download
          className="flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 font-bold text-black transition duration-400 ease-in-out hover:scale-110"
        >
          <IoMdDownload className="text-xl" />
          Resume
        </a>
      </section>
      <section className="mt-5 flex flex-col px-5 md:items-center">
        <p className="self-center text-lg font-bold italic">
          My Main Tech Stack:
        </p>
        <div className="grid w-full grid-cols-4 gap-6 rounded-sm border-1 px-6 py-3 lg:w-[65%]">
          <SkillItems Icon={SiMongodb} label="MongoDB" />
          <SkillItems Icon={SiExpress} label="Express.js" />
          <SkillItems Icon={SiReact} label="React" />
          <SkillItems Icon={SiNodedotjs} label="Node.js" />
        </div>
      </section>
    </>
  );
}

export default Home;
