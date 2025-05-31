import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://ladder-back.vercel.app/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading blog details...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!blog) return <div className="text-center py-8">Blog not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-[#024965] py-8 px-4">
        <div className="max-w-4xl mx-auto text-white">
          <div className="mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src="/profile-pic.png"
                alt={blog.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{blog.author}</p>
                <p className="text-sm text-gray-300">{blog.date}</p>
              </div>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm">{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[300px] w-[400px] object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-6 text-gray-600 font-medium border-l-4 border-[#024965] pl-4">
            {blog.snippet}
          </div>
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Tags Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold mb-4">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {['Construction', 'Engineering', 'Design'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;