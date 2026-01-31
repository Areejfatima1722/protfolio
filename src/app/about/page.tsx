export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">About Me</h1>

      <p className="mt-4 text-black-300">
        I am a passionate frontend developer with expertise in building responsive and user-friendly web applications using modern technologies like React and Next.
      </p>

      <img
        src="/img.jpg"
        alt="About"
        className="w-48 rounded-xl mt-6 border-2 border-white"
      />

      <h2 className="text-2xl font-semibold mt-8">My Skills</h2>
      <ul className="mt-3 space-y-1 text-black-300">
        <li>Web Design</li>
        <li>Frontend Development</li>
        <li>Next.js</li>
        <li>UI/UX Basics</li>
      </ul>
    </div>
  );
}
