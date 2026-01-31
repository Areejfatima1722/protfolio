export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">My Projects</h1>

      <ul className="mt-6 space-y-4">
        <li className="p-4 border border-gray-700 rounded-lg bg-gray-800">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-400">Short description of the project.</p>
          <a href="#" className="text-blue-400">View Project</a>
        </li>

        <li className="p-4 border border-gray-700 rounded-lg bg-gray-800">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-400">Short description of the project.</p>
          <a href="#" className="text-blue-400">View Project</a>
        </li>
      </ul>
    </div>
  );
}
