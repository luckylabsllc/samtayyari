import PageLayout from "@/components/PageLayout";
import { videos } from "@/content/videos";
import { getEmbedUrl } from "@/lib/video-embed";

const Video = () => {
  const sorted = [...videos].sort((a, b) => b.addedDate.localeCompare(a.addedDate));

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Video</h1>

        {sorted.length === 0 ? (
          <p className="text-secondary">Nothing here yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {sorted.map((video) => {
              const embedUrl = getEmbedUrl(video.url);
              return (
                <div key={video.url}>
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-accent dark:bg-[#222222]">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center text-secondary text-sm"
                      >
                        Watch: {video.title}
                      </a>
                    )}
                  </div>
                  <h2 className="font-medium mt-3">{video.title}</h2>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Video;
