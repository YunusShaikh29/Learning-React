import React from "react";

function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-bold text-stone-600 mb-4">
            {project.title}
          </h1>
          <button onClick={onDelete} className="text-stone-50 bg-stone-700 hover:bg-stone-950 px-2 py-1 rounded-sm">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}

export default SelectedProject;
