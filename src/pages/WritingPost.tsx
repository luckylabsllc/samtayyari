import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { posts } from "@/content/writing/posts";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const WritingPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="max-w-2xl mx-auto px-4 pb-24">
          <h1 className="text-2xl font-bold mb-4">Not found</h1>
          <Link to="/writing" className="text-primary hover:underline">
            ← Back to Writing
          </Link>
        </div>
      </PageLayout>
    );
  }

  const { Body } = post;

  return (
    <PageLayout>
      <article className="max-w-2xl mx-auto px-4 pb-24">
        <Link to="/writing" className="text-sm text-secondary hover:text-primary transition-colors">
          ← Writing
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{post.title}</h1>
        <span className="text-sm text-secondary">{formatDate(post.date)}</span>
        <div className="prose dark:prose-invert max-w-none mt-8">
          <Body />
        </div>
      </article>
    </PageLayout>
  );
};

export default WritingPost;
