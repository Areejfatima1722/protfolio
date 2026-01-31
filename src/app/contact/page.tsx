export default function Contact() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold">Contact Me</h1>

      <form className="mt-6 flex flex-col gap-4">
        <input
          className="border border-black-700 bg-gray-800 text-white p-2"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="border border-black-700 bg-gray-800 text-white p-2"
          placeholder="Your Email"
          type="email"
        />
        <textarea
          className="border border-black-700 bg-gray-800 text-white p-2 h-32"
          placeholder="Write your message..."
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
