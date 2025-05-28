'use client';
import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import { Typewriter } from 'react-simple-typewriter'


export default function Home() {
  return (
    <>
      <Head>
        <title>Nishok | Portfolio</title>
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-900 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Nishok 👋</h1>
          <h2 className="text-xl text-grey-600 mb-8">
            <Typewriter
              words={['Software Engineer', 'AI Builder', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">🧠 Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="AI Ops Log Analyzer"
              description="A GPT-4-powered log analysis tool that summarizes logs, detects root causes, and stores results in MongoDB. Comes with a Streamlit dashboard."
              liveLink="https://nishok-project-h49sh5xymwra25yuydzzzj.streamlit.app/"
              githubLink="https://github.com/nishok-venomanon/nishok-project"
            />
            {/* Add more ProjectCards here */}
          </div>
        </section>
        {/* About Me Section */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-semibold mb-4">💼 About Me</h2>
          <p className="text-gray-800 text-lg">
            I'm Nishok — a software engineer passionate about building intelligent systems that solve real-world problems.
            I enjoy working on AI-powered automation tools, backend architecture, and creative side projects.
            My current stack includes Java, Python, GPT-4, Azure, MongoDB, and React.
          </p>
        </section>
        <section className="max-w-3xl mx-auto mt-16">
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          📄 Download Resume
        </a>
        </section>
        {/* Contact Section */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-semibold mb-4">📬 Contact</h2>
          <p className="text-lg text-gray-800 mb-2">
            I'm open to collaboration, freelance work, or just a good conversation.
          </p>
          <ul className="text-blue-600 space-y-2">
            <li><a href="mailto:nishok314@gmail.com" className="hover:underline">📧 nishok314@gmail.com</a></li>
            <li><a href="https://github.com/nishok-venomanon/nishok-project" target="_blank" className="hover:underline">🐙 GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/nishokkannan127/" target="_blank" className="hover:underline">💼 LinkedIn</a></li>
          </ul>
        </section>

      </main>
    </>
  )
}
