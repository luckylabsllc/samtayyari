import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { posts } from "@/content/writing/posts";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Writing = () => {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Writing</h1>

        {sorted.length === 0 ? (
          <p className="text-secondary">Nothing published yet — check back soon.</p>
        ) : (
          <ul className="space-y-8">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link to={`/writing/${post.slug}`} className="block group">
                  <span className="text-sm text-secondary">{formatDate(post.date)}</span>
                  <h2 className="text-xl font-semibold mt-1 mb-1 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-secondary">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageLayout>
  );
};

export default Writing;
