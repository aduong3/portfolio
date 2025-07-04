import { SiGithub, SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-6 text-xl sm:text-2xl">
      <p>Email: aduongsnd@gmail.com</p>
      <div className="flex flex-col gap-6">
        <a
          href="https://github.com/aduong3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <SiGithub />
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-duong-6210a0206/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <SiLinkedin />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
