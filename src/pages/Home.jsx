import { Link } from "react-router";
import photo from "../assets/Andrew_Lake_Tahoe_NOBG.png";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  return (
    <>
      <section className="mr-96 flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-7xl">Andrew Duong</h1>
        <h2 className="text-4xl text-blue-400">Software Engineer</h2>
        <div className="w-[42%]">
          <p className="text-xl">
            I’m a Full Stack Developer passionate about learning new
            technologies and turning them into solutions that make a difference.
          </p>
        </div>

        <div className="flex gap-24 text-xl">
          <button className="rounded-lg bg-yellow-300 px-3 py-1">
            <span className="flex items-center gap-2">
              <IoMdDownload />
              <p>Resume</p>
            </span>
          </button>
          <button className="rounded-lg bg-blue-400 px-3 py-1">
            <span className="flex items-center gap-2">
              <MdOutlineEmail />
              <p>Contact Me</p>
            </span>
          </button>
        </div>
      </section>

      <img
        src={photo}
        alt="Photo of Andrew Duong"
        className="fixed right-[-225px] drop-shadow-[25px_12px_0_rgba(96,165,250)]"
      />
    </>
  );
}

export default Home;
