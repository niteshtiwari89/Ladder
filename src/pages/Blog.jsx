import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogPage = () => {

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articleItems, setArticleItems] = useState([]);
  const [error, setError] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://ladder-back.vercel.app/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchArticleItems = async () => {
      try {
        const response = await fetch("https://ladder-back.vercel.app/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch article items");
        }
        const data = await response.json();
        setArticleItems(data);
      } catch (err) {
        console.error("Error fetching article items:", err);
      }
    };

    fetchArticleItems();
  }, []);

  useEffect(() => {
    const fetchBlogStats = async () => {
      try {
        const response = await fetch("https://ladder-back.vercel.app/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog stats");
        }
        const blogs = await response.json();

        // Process contributors
        const contributorsMap = blogs.reduce((acc, blog) => {
          if (!acc[blog.author]) {
            acc[blog.author] = {
              id: acc.length + 1,
              name: blog.author,
              role: "Writer", // You might want to store this in your blog schema
              image: "/profile-pic.png", // Default image
              articles: 1,
              rating: 4.5 // Default rating
            };
          } else {
            acc[blog.author].articles += 1;
          }
          return acc;
        }, {});
        setContributors(Object.values(contributorsMap));

        // Process categories
        const categoriesCount = blogs.reduce((acc, blog) => {
          acc[blog.category] = (acc[blog.category] || 0) + 1;
          return acc;
        }, {});
        setCategories(Object.entries(categoriesCount).map(([label, count]) => ({
          label,
          count
        })));

        // Process tags (assuming you have tags in your blog schema)
        // If you don't have tags, you might want to extract keywords from titles or content
        const tagsCount = blogs.reduce((acc, blog) => {
          const tags = blog.category.split(',').map(t => t.trim()); // Using categories as tags for now
          tags.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1;
          });
          return acc;
        }, {});
        setTags(Object.entries(tagsCount)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
        );

      } catch (error) {
        console.error("Error fetching blog stats:", error);
      }
    };

    fetchBlogStats();
  }, []);

  if (loading) return <div className="text-center py-8">Loading blogs...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const popularPosts = blogPosts.filter((post) => post.popular);
  const regularPosts = blogPosts.filter((post) => !post.featured && !post.popular);

  const BlogCarousel = ({ popularPosts }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
      setActiveIndex((current) =>
        current === popularPosts.length - 1 ? 0 : current + 1
      );
    };

    const prevSlide = () => {
      setActiveIndex((current) =>
        current === 0 ? popularPosts.length - 1 : current - 1
      );
    };

    return (
      <>
        <div className="min-h-screen bg-gray-50">
          {/* Header with subtle hover effect */}
          <header className="w-full bg-[#024965] py-8 text-center transition-all duration-300 hover:bg-[#01354a]">
            <h1 className="text-3xl font-bold text-white transform hover:scale-105 transition-transform duration-300">
              THE BLOG
            </h1>
          </header>

          {/* Blog Content */}
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-4 flex items-center">
              <div className="bg-[#024965] px-2 py-1 text-sm text-white transition-all duration-300 hover:bg-[#01354a]">
                Featured
              </div>
              <div className="ml-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
                This Month
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Featured Section */}
              <div className="lg:col-span-2 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Link
                          to={`/blog/${post._id}`}
                          key={post._id}
                          className="w-full transition-all duration-300 hover:shadow-lg rounded-lg p-4 hover:bg-white"
                        >
                    {/* <div
                      key={post.id}
                      className="w-full transition-all duration-300 hover:shadow-lg rounded-lg p-4 hover:bg-white"
                    > */}
                      <div className="mb-1 inline-block bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300 transition-colors duration-300">
                        {post.category}
                      </div>
                      <h2 className="mb-4 text-base sm:text-lg lg:text-xl font-bold hover:text-[#024965] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="mb-4 w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded object-cover transform hover:scale-[1.02] transition-transform duration-500"
                        />
                      )}
                      <div className="mb-4 flex flex-wrap items-center">
                        <div className="mr-2 h-6 w-6 sm:h-8 sm:w-8 overflow-hidden rounded-full bg-gray-300 hover:ring-2 ring-[#024965] transition-all duration-300">
                          <img
                            src="/profile-pic.png"
                            alt="author"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                          {post.author}
                        </span>
                        <span className="mx-1 sm:mx-2 text-xs sm:text-sm text-gray-400">•</span>
                        <span className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                          {post.date}
                        </span>
                        <span className="mx-1 sm:mx-2 text-xs sm:text-sm text-gray-400">•</span>
                        <span className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                          {post.readTime}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300 line-clamp-3">
                        {post.snippet}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="lg:col-span-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-[#024965] px-2 py-1 text-sm text-white hover:bg-[#01354a] transition-colors duration-300">
                    Popular
                  </div>
                  <div className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                    Posted
                  </div>
                </div>

                <div className="relative">
                  {/* Carousel Navigation */}
                  <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 transform">
                    <button
                      onClick={prevSlide}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-300"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  </div>

                  {/* Carousel Items */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                      }}
                    >
                      {popularPosts.map((post, index) => (
                        <div
                          key={post.id}
                          className="min-w-full px-1 transform hover:scale-[1.01] transition-transform duration-300"
                        >
                          <div className="mb-8 border-l-4 border-teal-800 pl-4 hover:border-[#024965] transition-colors duration-300">
                            <div className="mb-1 inline-block bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300 transition-colors duration-300">
                              {post.category}
                            </div>
                            <h2 className="mb-2 text-xl font-bold hover:text-[#024965] transition-colors duration-300">
                              {post.title}
                            </h2>
                            <div className="mb-2 flex items-center">
                              <div className="mr-2 h-6 w-6 overflow-hidden rounded-full bg-gray-300 hover:ring-2 ring-[#024965] transition-all duration-300">
                                <img
                                  src="/profile-pic.png"
                                  alt="author"
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <span className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                {post.author}
                              </span>
                              <span className="mx-2 text-xs text-gray-400">
                                •
                              </span>
                              <span className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                {post.date}
                              </span>
                              <span className="mx-2 text-xs text-gray-400">
                                •
                              </span>
                              <span className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                {post.readTime}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-300">
                              {post.snippet}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Navigation */}
                  <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 transform">
                    <button
                      onClick={nextSlide}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-300"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Pagination Indicators */}
                  <div className="mt-4 flex justify-center">
                    {popularPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-[#024965]" : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl bg-gray-50 px-4 py-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 h-6 w-6 bg-[#024965] hover:bg-[#01354a] transition-colors duration-300"></div>
                    <span className="font-bold text-[#024965] hover:text-[#01354a] transition-colors duration-300">
                      Featured
                    </span>
                  </div>
                  <div className="flex items-center">
                    {/* <div className="mr-2 h-6 w-6 bg-[#024965] hover:bg-[#01354a] transition-colors duration-300"></div>
                    <span className="font-bold text-[#024965] hover:text-[#01354a] transition-colors duration-300">
                      Authors
                    </span> */}
                  </div>
                </div>

                {/* Blog Posts */}
                <div className="space-y-6">
                  {/* // Then in your JSX where you map through articleItems, make sure to handle loading state: */}
                  {articleItems.length > 0 ? (
                    <div className="space-y-6">
                      {articleItems.map((article) => (
                        <Link
                          to={`/blog/${article._id}`}
                          key={article._id}
                          className="flex border-b border-gray-200 pb-6 transition-all duration-300 hover:shadow-md rounded-lg p-4 hover:bg-white"
                        >
                          <div className="mr-4 flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="h-20 w-28 rounded object-cover transform hover:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                          <div className="flex flex-col justify-between">
                            <h2 className="mb-2 text-lg font-bold text-gray-800 hover:text-[#024965] transition-colors duration-300">
                              {article.title}
                            </h2>
                            <div className="mb-2 flex items-center text-xs text-gray-500">
                              <span className="hover:text-gray-700 transition-colors duration-300">
                                {article.author}
                              </span>
                              <span className="mx-1">•</span>
                              <span className="hover:text-gray-700 transition-colors duration-300">
                                {article.date}
                              </span>
                              <span className="mx-1">•</span>
                              <span className="hover:text-gray-700 transition-colors duration-300">
                                {article.readTime}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                              {article.snippet}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">Loading articles...</div>
                  )}
                </div>

                {/* Share Experience Section */}
                <div className="my-8 rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="mb-4 text-lg font-bold hover:text-[#024965] transition-colors duration-300">
                    Share Your Experience With Us
                  </h3>
                  <button className="rounded-md border border-[#024965] px-4 py-2 text-sm text-[#024965] hover:bg-[#024965] hover:text-white transition-all duration-300">
                    Write a Schedule
                  </button>
                </div>

                {/* Pagination */}
                <div className="mt-8 flex items-center justify-center space-x-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm hover:bg-gray-100 hover:border-[#024965] transition-all duration-300">
                    ←
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100 text-sm hover:bg-[#024965] hover:text-white transition-all duration-300">
                    1
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm hover:bg-[#024965] hover:text-white transition-all duration-300">
                    2
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm hover:bg-[#024965] hover:text-white transition-all duration-300">
                    3
                  </button>
                  <span className="text-sm hover:text-[#024965] transition-colors duration-300">
                    ...
                  </span>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm hover:bg-[#024965] hover:text-white transition-all duration-300">
                    9
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-sm hover:bg-gray-100 hover:border-[#024965] transition-all duration-300">
                    →
                  </button>
                  <button className="ml-2 rounded bg-[#024965] px-3 py-1 text-sm text-white hover:bg-[#01354a] hover:scale-105 transition-all duration-300">
                    Next
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Authors */}
                <div>
                  <h3 className="mb-4 flex items-center border-b border-gray-200 pb-2 text-lg font-bold text-[#024965] hover:text-[#01354a] transition-colors duration-300">
                    <span className="mr-2 inline-block h-5 w-5 bg-[#024965] hover:bg-[#01354a] transition-colors duration-300"></span>
                    Authors
                  </h3>
                  <div className="space-y-4">
                    {contributors.map((profile) => (
                      <div
                        key={profile.id}
                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                      >
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="mr-3 h-12 w-12 rounded-full hover:ring-2 ring-[#024965] transition-all duration-300"
                        />
                        <div>
                          <h4 className="font-bold hover:text-[#024965] transition-colors duration-300">
                            {profile.name}
                          </h4>
                          <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                            {profile.role}
                          </p>
                          <div className="mt-1 flex items-center">
                            <div className="mr-2 text-xs hover:text-gray-700 transition-colors duration-300">
                              {profile.articles} Articles
                            </div>
                            <div className="flex items-center text-xs">
                              <span className="mr-1 hover:text-gray-700 transition-colors duration-300">
                                {profile.rating}
                              </span>
                              <span className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300">
                                ★★★★★
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-lg bg-[#024965] p-6 text-white transform hover:scale-[1.02] transition-transform duration-500">
                  <h3 className="mb-4 text-lg font-bold">
                    Build Strong With Foundation
                  </h3>
                  <p className="mb-4 text-sm">
                    Subscribe to our newsletter & stay updated with the latest
                    trends in construction foundation building.
                  </p>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full rounded-md border border-teal-600 bg-[#024965] p-2 text-sm text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-300"
                    />
                  </div>
                  <button className="w-full rounded-md bg-white py-2 text-sm font-bold text-teal-800 hover:bg-teal-100 hover:scale-[1.02] transition-all duration-300">
                    SUBSCRIBE
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="mb-4 flex items-center border-b border-gray-200 pb-2 text-lg font-bold text-[#024965] hover:text-[#01354a] transition-colors duration-300">
                    <span className="mr-2 inline-block h-5 w-5 bg-[#024965] hover:bg-[#01354a] transition-colors duration-300"></span>
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category.label}
                        className="flex justify-between p-2 rounded hover:bg-gray-100 transition-colors duration-300"
                      >
                        <span className="text-gray-700 hover:text-[#024965] transition-colors duration-300">
                          {category.label}
                        </span>
                        <span className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm transform hover:scale-[1.05] transition-transform duration-300">
                    <div className="text-2xl font-bold text-[#024965]">14</div>
                    <div className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                      New Posts
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm transform hover:scale-[1.05] transition-transform duration-300">
                    <div className="text-2xl font-bold text-[#024965]">405</div>
                    <div className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                      Total Stories
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm transform hover:scale-[1.05] transition-transform duration-300">
                    <div className="text-2xl font-bold text-[#024965]">25</div>
                    <div className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                      Contributors
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm transform hover:scale-[1.05] transition-transform duration-300">
                    <div className="text-2xl font-bold text-[#024965]">118</div>
                    <div className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                      Topics
                    </div>
                  </div>
                </div> */}

                {/* Topics */}
                <div>
                  <h3 className="mb-4 flex items-center border-b border-gray-200 pb-2 text-lg font-bold text-[#024965] hover:text-[#01354a] transition-colors duration-300">
                    <span className="mr-2 inline-block h-5 w-5 bg-[#024965] hover:bg-[#01354a] transition-colors duration-300"></span>
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <div
                        key={tag.name}
                        className={`rounded-md px-3 py-1 text-sm transform hover:scale-110 transition-all duration-300 ${
                          tag.name === "Foundation"
                            ? "bg-[#024965] text-white hover:bg-[#01354a]"
                            : "border border-gray-300 bg-white text-gray-700 hover:border-[#024965] hover:text-[#024965]"
                        }`}
                      >
                        {tag.name} {tag.count && `(${tag.count})`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <BlogCarousel popularPosts={popularPosts} />
    </div>
  );
};

export default BlogPage;
