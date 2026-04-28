import BlogPageClient from "./BlogPageClient";
import { getAllBlogPosts, getFeaturedPost } from "./blogContent";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const featuredPost = getFeaturedPost(blogPosts);

  if (!featuredPost) return null;

  const categories = [
    "All",
    "Full Stack Project",
    "Web3 Project",
    "Cyber Security Project",
  ];

  return (
    <BlogPageClient
      blogs={blogPosts}
      featuredPost={featuredPost}
      categories={categories}
    />
  );
}
