import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    category: 'writings' as 'writings' | 'projects',
    date: '',
    githubLink: '',
    published: false,
  });

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      const data = await api.dashboard.getAllBlogs();
      const blog = data.blogs.find((b: any) => b._id === id);
      if (blog) {
        setFormData({
          title: blog.title,
          body: blog.body,
          category: blog.category,
          date: blog.date ? new Date(blog.date).toISOString().split('T')[0] : '',
          githubLink: blog.githubLink || '',
          published: blog.published,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch blog',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await api.dashboard.updateBlog(id, formData);
        toast({ title: 'Success', description: 'Post updated' });
      } else {
        await api.dashboard.createBlog(formData);
        toast({ title: 'Success', description: 'Post created' });
      }
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Save error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save post',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-foreground font-mono">
        {id ? 'Edit Post' : 'Create New Post'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="category" className="font-mono">Category</Label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as 'writings' | 'projects' })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
          >
            <option value="writings">Writings</option>
            <option value="projects">Projects</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title" className="font-mono">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="font-mono"
          />
          <p className="text-xs text-muted-foreground">Slug will be auto-generated from title</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="font-mono">Publish Date</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="font-mono"
          />
          <p className="text-xs text-muted-foreground">Leave empty to use today's date</p>
        </div>

        {formData.category === 'projects' && (
          <div className="space-y-2">
            <Label htmlFor="githubLink" className="font-mono">GitHub Link</Label>
            <Input
              id="githubLink"
              type="url"
              value={formData.githubLink}
              onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
              placeholder="https://github.com/username/repo"
              className="font-mono"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label className="font-mono">Content</Label>
          <div className="bg-card border border-border rounded-md">
            <ReactQuill
              theme="snow"
              value={formData.body}
              onChange={(body) => setFormData({ ...formData, body })}
              modules={modules}
              className="min-h-[400px]"
            />
          </div>
          <p className="text-xs text-muted-foreground">Reading time will be calculated automatically</p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
            className="h-4 w-4"
          />
          <Label htmlFor="published" className="font-mono cursor-pointer">
            Publish immediately
          </Label>
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : id ? 'Update Post' : 'Create Post'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/admin/dashboard')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}