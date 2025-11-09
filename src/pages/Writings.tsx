import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { api, Blog } from "@/lib/api";

const Writings = () => {
  const [writings, setWritings] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWritings();
  }, []);

  const loadWritings = async () => {
    try {
      const data = await api.blogs.getByCategory('writings', 1, 50);
      setWritings(data.blogs);
    } catch (error) {
      console.error('Failed to load writings:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 border-b border-border pb-4">
          All Writings
        </h1>
        
        <div>
          {writings.length > 0 ? (
            writings.map((writing) => (
              <BlogCard 
                key={writing._id}
                title={writing.title}
                excerpt={writing.body.substring(0, 200) + '...'}
                slug={writing.slug}
                date={new Date(writing.date || '').toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
                readTime={writing.readTime || ''}
              />
            ))
          ) : (
            <p className="text-muted-foreground">No writings published yet.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Writings;