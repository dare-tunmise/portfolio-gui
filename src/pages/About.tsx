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
            Hi, I'm Dare Tunmise—a software engineer, writer, and advocate for effective learning.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-12">
            My Journey
          </h2>
          
          <p className="leading-relaxed mb-4">
            For most of my school years, I believed I was "bad at math." It seemed like some 
            people just "got it" while others, like me, struggled endlessly. This belief 
            shadowed my confidence for years.
          </p>
          
          <p className="leading-relaxed mb-4">
            Everything changed when I decided to immerse myself in learning for 150 consecutive 
            days. What I discovered transformed my entire perspective: I wasn't "dumb"—I was 
            simply missing prerequisite knowledge. It was like trying to watch a movie halfway 
            through and wondering why the plot didn't make sense.
          </p>
          
          <p className="leading-relaxed mb-4">
            This realization didn't just apply to math. It applied to programming, to complex 
            systems, to any skill that seemed "impossible" at first glance. The gap wasn't 
            ability—it was foundation.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-12">
            What I Do Now
          </h2>
          
          <p className="leading-relaxed mb-4">
            Today, I build software and write about learning. My mission is to help others 
            overcome the same obstacles I faced. Through my writings, projects, and upcoming 
            book, I share practical strategies for identifying knowledge gaps and building 
            strong foundations.
          </p>
          
          <p className="leading-relaxed mb-4">
            I believe that anyone can learn anything—they just need the right approach and 
            the right prerequisites.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-12">
            Get in Touch
          </h2>
          
          <p className="leading-relaxed mb-4">
            I'm always interested in connecting with fellow learners, educators, and builders. 
            Feel free to reach out:
          </p>
          
          <ul className="list-none pl-0 space-y-2 mb-8">
            <li>
              <a href="mailto:hello@daretunmise.com" className="text-accent hover:underline">
                Email: hello@daretunmise.com
              </a>
            </li>
            <li>
              <a href="https://twitter.com/daretunmise" className="text-accent hover:underline">
                Twitter: @daretunmise
              </a>
            </li>
            <li>
              <a href="https://github.com/daretunmise" className="text-accent hover:underline">
                GitHub: @daretunmise
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
