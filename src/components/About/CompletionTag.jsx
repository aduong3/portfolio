const baseClass =
  "whitespace-nowrap rounded-lg px-2 py-1 text-xs font-semibold flex items-center";

function CompletionTag({ isCompleted }) {
  if (isCompleted !== true && isCompleted !== false) return null;

  if (isCompleted) {
    return <div className={`${baseClass} bg-green-600`}>Completed</div>;
  }

  return <div className={`${baseClass} bg-red-500`}>In Progress</div>;
}

export default CompletionTag;
