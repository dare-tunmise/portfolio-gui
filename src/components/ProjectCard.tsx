import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

const stripHtml = (html: string) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};



const ProjectCard = ({ title, excerpt, slug }: ProjectCardProps) => {
  return (
    <article className="mb-8 pb-8 border-b border-border last:border-0">
      <Link to={`/project/${slug}`} className="group">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
      </Link>
      <p className="text-muted-foreground mb-3 leading-relaxed">
        {stripHtml(excerpt)}
      </p>
      <Link 
        to={`/project/${slug}`}
        className="text-accent hover:underline text-sm"
      >
        Learn more →
      </Link>
    </article>
  );
};

export default ProjectCard;
