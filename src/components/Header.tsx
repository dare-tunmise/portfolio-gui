import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-center gap-8 text-sm">
          <Link 
            to="/" 
            className="hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link 
            to="/writings" 
            className="hover:text-accent transition-colors"
          >
            Writings
          </Link>
          <Link 
            to="/projects" 
            className="hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/book" 
            className="hover:text-accent transition-colors"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
