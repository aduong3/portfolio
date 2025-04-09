import { IoIosLink } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import { Link } from "react-router";

function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-red-400">Introduction</h1>
        <p>
          I'm a Full-Stack Developer passionate about technology and
          problem-solving. I’m driven by the desire to find practical and
          efficient solutions to everyday challenges, combining creativity with
          functionality. Whether it's improving a daily task or optimizing a
          hobby, I love applying tech to make things work better. My goal is to
          make practical solutions that improve efficiency and create better
          user experiences.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-blue-300">
          Education and Courses
        </h1>
        <div>
          <h2 className="text-xl">University of California, Merced</h2>
          <div className="flex items-center gap-1">
            <PiCertificate />
            <p>B.S in Computer Science and Engineering</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">Udemy Courses</h2>
          <Link
            to="https://www.udemy.com/share/108PTo3@FNEKhBxQiqlQ4Mxp_aC5Ameb_0h6D-TknOHhQtXgjOXQw-ml10hjWDyCZgB1GDqvNA==/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <IoIosLink />
            The Ultimate React Course 2025 by Jonas Schmedtmann
          </Link>
          <Link
            to="https://www.udemy.com/share/101Wv63@9ppfNf50jil3G3iE4VkRE30Md9WDQNHczJRtbgsAqU_k0UmYiHrcTd0JmyU_9Okr2w==/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <IoIosLink />
            Node.js, Express, MongoDB & More: The Complete Bootcamp by Jonas
            Schmedtmann
          </Link>
          <Link
            to="https://www.udemy.com/share/101sTi3@ZetVJTLAEzRE9d5WxlnVKC_v6xnC8C8cMsXAFJPDYhb6H-Vd7OJqa8gJQG99rvc1hQ==/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <IoIosLink />
            Understanding TypeScript by Maximilian Schwarzmüller
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-green-300">Skills</h1>
        <div>
          <h2 className="text-2xl font-semibold">Frontend</h2>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>TailwindCSS</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Backend</h2>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Others</h2>
          <p>Git</p>
          <p>Postman</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-orange-300">
          Hobbies and Interests
        </h1>
        <p>📚 Language Learning: Japanese (N4)</p>
        <p>
          🧗‍♂️ Bouldering (Living vicariously through YouTube at the moment 😅)
        </p>
        <p>💻 Gaming</p>
        <p>✈ Traveling (Hopefully solo one day!)</p>
        <p>💪 Working Out </p>
      </div>
    </div>
  );
}

export default About;
