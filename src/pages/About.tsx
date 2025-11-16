import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 border-b border-border pb-4">
          About
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            I’m Dare Tunmise — a software engineer and writer. I build backend systems,
            AI-powered tools, and fun things on the web that make work easier for people.
          </p>

          <p className="leading-relaxed mb-6">
            I currently work with a London-based travel-tech company, focusing on backend engineering, 
            system design, and applied AI. A lot of my work involves understanding how 
            large language models behave under the hood and using them to solve practical problems.
          </p>

          <p className="leading-relaxed mb-6">
            Outside work, I write, experiment with ideas, and build tools that interest me. 
            My work often sits at the intersection of technology, structure, and human behaviour.
          </p>

          <p className="leading-relaxed mb-6">
            I’m open to collaborating with companies that want to integrate AI into their workflow,
            build internal tools, or develop custom AI agents. Projects start from $3,000.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-12">Get in Touch</h2>

          <p className="leading-relaxed mb-4">
            If you have something in mind or want to discuss a project, feel free to reach out.
          </p>

          <ul className="list-none pl-0 space-y-2 mb-8">
            <li>
              <a
                href="mailto:tunmise@bookmack.com"
                className="text-accent hover:underline"
              >
                Email: hello@daretunmise.com
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Dare_Tunmise"
                className="text-accent hover:underline"
              >
                Twitter: @daretunmise
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dare-tunmise-47524519a/"
                className="text-accent hover:underline"
              >
                Linkedin: @daretunmise
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dare-tunmise"
                className="text-accent hover:underline"
              >
                GitHub: @dare-tunmise
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
