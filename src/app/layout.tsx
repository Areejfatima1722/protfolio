import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex">

        {/* LEFT SIDEBAR — white background + blue text */}
        <aside className="w-60 min-h-screen bg-white text-blue-900 p-6 border-r border-gray-400">
          <h2 className="text-xl font-bold mb-6">Menu</h2>

          <div className="flex flex-col space-y-4 text-lg">

            <Link href="/about" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              About
            </Link>

            <Link href="/contact" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              Contact
            </Link>

            <Link href="/projects" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              Projects
            </Link>

            <Link href="/skills" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              Skills
            </Link>

            <h3 className="text-xl font-bold mt-6">Accounts</h3>

            <a href="#" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              Facebook
            </a>

            <a href="#" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              Instagram
            </a>

            <a href="#" className="bg-gray-200 px-4 py-2 hover:bg-blue-300">
              GitHub
            </a>

          </div>
        </aside>

        {/* MAIN CONTENT AREA — unchanged */}
        <main className="flex-1 p-10">
          {children}
        </main>

      </body>
    </html>
  );
}
