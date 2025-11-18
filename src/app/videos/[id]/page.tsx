import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getVideoById, videos } from '@/lib/videos';

interface VideoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}

export default async function VideoPage({ params }: VideoPageProps) {
  const resolvedParams = await params;
  const video = getVideoById(resolvedParams.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-[1400px] mx-auto mb-6">
        <Link href="/videos" className="inline-flex items-center gap-2 text-[#6A2BBF] no-underline font-semibold text-base py-2 px-4 rounded-lg transition-colors hover:bg-[#E5DFF5]">
          <svg 
            className="w-5 h-5"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Videos
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto mb-8 bg-black rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mb-12 bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-[#6A2BBF] mb-4 tracking-tight">
          {video.title}
        </h1>
        {video.description && (
          <p className="text-lg leading-relaxed text-[#1E1E1E] opacity-80">
            {video.description}
          </p>
        )}
      </div>

      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6 tracking-tight">
          More Videos
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {videos
            .filter(v => v.id !== video.id)
            .map((relatedVideo) => (
              <Link 
                key={relatedVideo.id}
                href={`/videos/${relatedVideo.id}`}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer no-underline text-inherit shadow-md hover:transform hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white bg-[#6A2BBF]/80 rounded-full p-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="p-4 text-base font-semibold text-[#1E1E1E] tracking-tight leading-snug">
                  {relatedVideo.title}
                </h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
