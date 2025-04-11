import { Link } from "react-router";
import CompletionTag from "./CompletionTag";

function UdemyLink({ to, isCompleted, children }) {
  return (
    <div className="grid grid-cols-[1fr_80px] gap-4 sm:flex">
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className="flex max-w-max items-center gap-1 hover:text-blue-400"
      >
        {children}
      </Link>
      <CompletionTag isCompleted={isCompleted} />
    </div>
  );
}

export default UdemyLink;
