import photoNoBG from "../assets/Andrew_Lake_Tahoe_NOBG.png";
import photo from "../assets/Andrew_Lake_Tahoe.png";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";

function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-4 text-center xl:mr-96 xl:gap-8">
        <div className="flex h-[10em] w-[10em] items-center justify-center overflow-hidden rounded-full border-4 border-blue-500 md:h-[15em] md:w-[15em] xl:hidden">
          <img
            src={photo}
            alt="Photo of Andrew Duong profile size"
            className="scale-150"
          />
        </div>
        <h1 className="text-4xl lg:text-7xl">Andrew Duong</h1>
        <h2 className="text-2xl text-blue-400 lg:text-4xl">
          Software Engineer
        </h2>
        <div className="w-[80%] md:w-[42%]">
          <p className="text-md lg:text-xl">
            I’m a Full Stack Developer passionate about learning new
            technologies and turning them into solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-xl md:flex-row md:gap-24">
          <a
            className="rounded-lg bg-yellow-300 px-3 py-1 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:shadow-[6px_6px_5px_rgba(0,0,0,.20)]"
            href="./Andrew_Duong_Resume.pdf"
            download
          >
            <span className="flex items-center gap-2">
              <IoMdDownload />
              <p>Resume</p>
            </span>
          </a>
          <Link
            className="rounded-lg bg-blue-400 px-3 py-1 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:shadow-[6px_6px_5px_rgba(0,0,0,.20)]"
            to="/contact"
          >
            <span className="flex items-center gap-2">
              <MdOutlineEmail />
              <p>Contact Me</p>
            </span>
          </Link>
        </div>
      </section>

      <img
        src={photoNoBG}
        alt="Photo of Andrew Duong"
        className="pointer-events-none fixed right-[-225px] bottom-0 hidden drop-shadow-[25px_12px_0_rgba(96,165,250)] xl:inline"
      />
    </div>
  );
}

export default Home;
