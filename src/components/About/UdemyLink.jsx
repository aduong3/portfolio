import { Link } from "react-router";
import CompletionTag from "./CompletionTag";

function UdemyLink({ to, isCompleted, children }) {
  return (
    <div className="flex gap-4">
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
