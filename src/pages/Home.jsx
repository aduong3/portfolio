import { Link } from "react-router";
import photo from "./../assets/Andrew_photo.png";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePageview } from "react-icons/md";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <section className="flex flex-col gap-2 px-2 text-center md:gap-5 lg:px-0 lg:text-left">
          <p className="text-4xl lg:text-6xl">
            Hey, I'm <span className="font-bold text-violet-500">Andrew</span>!
          </p>
          <p className="text-2xl font-bold text-red-500">
            Full-Stack Developer
          </p>
          <p className="text-md lg:text-xl">
            I enjoy creating random solutions that make some aspect of everyday
            life easier.
          </p>
        </section>
        <div className="relative my-6 lg:my-0">
          <div className="relative z-10 h-50 w-50 overflow-hidden rounded-full border-2 border-gray-50 md:h-60 md:w-60">
            <img
              src={photo}
              alt="Me In Japan"
              className="relative z-10 scale-140 object-top"
            />
          </div>
          <div className="absolute top-3 left-5 z-0 h-50 w-50 rounded-full bg-violet-500 md:h-60 md:w-60"></div>
          <div className="absolute bottom-[-2px] left-6 z-12 flex items-center gap-2 rounded-lg bg-green-500 px-3 py-1 md:left-12">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-100"></div>
            <span className="font-bold">Open To Work</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 lg:justify-normal lg:gap-8">
        <Link
          to="/projects"
          className="flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 font-bold text-black transition duration-400 ease-in-out hover:scale-110"
        >
          <MdOutlinePageview />
          My Projects
        </Link>
        <a
          href="/Andrew_Duong_Resume.pdf"
          download
          className="flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 font-bold text-black transition duration-400 ease-in-out hover:scale-110"
        >
          <IoMdDownload />
          My Resume
        </a>
      </div>
      <div className="mt-5 flex flex-col px-5 md:items-center">
        <p className="self-center text-lg font-bold italic">
          My Main Tech Stack:
        </p>
        <div className="grid w-full grid-cols-4 justify-around gap-6 rounded-sm border-1 px-6 py-3 lg:w-[70%]">
          <div className="flex flex-col items-center justify-center">
            <SiMongodb className="h-8 w-8" />{" "}
            <span className="hidden sm:inline">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="h-8 w-8" />{" "}
            <span className="hidden sm:inline">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiReact className="h-8 w-8" />{" "}
            <span className="hidden sm:inline">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNodedotjs className="h-8 w-8" />{" "}
            <span className="hidden sm:inline">Node.js</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
