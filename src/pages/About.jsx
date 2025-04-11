import Education from "../components/About/Education";
import Hobbies from "../components/About/Hobbies";
import Skills from "../components/About/Skills";

function About() {
  return (
    <div className="flex flex-col gap-5 py-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-red-400 sm:text-4xl">
          Introduction
        </h1>
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
      <div>
        <h1 className="text-3xl font-bold text-yellow-300 sm:text-4xl">
          Experience
        </h1>
        <div className="flex flex-col gap-2">
          <div className="md:flex md:justify-between">
            <h2 className="text-xl">Pacico, Inc. - IT</h2>
            <h2 className="text-md md:text-xl">Nov 2021 - Nov 2022</h2>
          </div>
          <ul className="list-disc pl-5">
            <li>
              Applied HTML and CSS to style the company's eCommerce website
              through the CMS system, Magento
            </li>
            <li>
              Analyzed competiting eCommerce websites and integrated new
              features for better user experience
            </li>
          </ul>
        </div>
      </div>
      <Education />
      <Skills />
      <Hobbies />
    </div>
  );
}

export default About;
