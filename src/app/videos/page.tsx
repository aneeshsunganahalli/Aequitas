import Link from 'next/link';
import Image from 'next/image';
import { videos } from '@/lib/videos';

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto mb-8 md:mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#6A2BBF] mb-2 tracking-tight">
          Videos
        </h1>
        <p className="text-base md:text-xl text-[#1E1E1E] opacity-70">
          Explore our collection of educational content
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 md:gap-8">
        {videos.map((video) => (
          <Link 
            key={video.id} 
            href={`/videos/${video.id}`}
            className="bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer no-underline text-inherit shadow-md hover:transform hover:-translate-y-2 hover:shadow-2xl group"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-black">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={480}
                height={270}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg 
                  className="w-12 md:w-16 h-12 md:h-16 text-white bg-[#6A2BBF]/90 rounded-full p-2 md:p-3 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            
            <div className="p-4 md:p-5">
              <h3 className="text-lg md:text-xl font-bold text-[#1E1E1E] mb-2 tracking-tight">
                {video.title}
              </h3>
              {video.description && (
                <p className="text-sm md:text-[0.95rem] text-[#1E1E1E] opacity-70 leading-6 line-clamp-2">
                  {video.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
