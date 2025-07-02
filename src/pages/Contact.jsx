import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router";

function Contact() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-2xl">
      <p>Email: aduongsnd@gmail.com</p>
      <div className="flex flex-col gap-6">
        <Link
          to="https://github.com/aduong3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <SiGithub />
          <p>GitHub</p>
        </Link>
        <Link
          to="https://www.linkedin.com/in/andrew-duong-6210a0206/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <SiLinkedin />
          <p>LinkedIn</p>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
