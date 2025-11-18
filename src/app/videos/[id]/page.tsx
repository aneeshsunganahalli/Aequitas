import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getVideoById, videos } from '@/lib/videos';
import styles from './video-player.module.css';

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
    <div className={styles.container}>
      <div className={styles.backButton}>
        <Link href="/videos" className={styles.backLink}>
          <svg 
            className={styles.backIcon}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Videos
        </Link>
      </div>

      <div className={styles.playerWrapper}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoFrame}
            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      <div className={styles.videoDetails}>
        <h1 className={styles.videoTitle}>{video.title}</h1>
        {video.description && (
          <p className={styles.videoDescription}>{video.description}</p>
        )}
      </div>

      <div className={styles.relatedVideos}>
        <h2 className={styles.relatedTitle}>More Videos</h2>
        <div className={styles.relatedGrid}>
          {videos
            .filter(v => v.id !== video.id)
            .map((relatedVideo) => (
              <Link 
                key={relatedVideo.id}
                href={`/videos/${relatedVideo.id}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedThumbnail}>
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    className={styles.relatedImage}
                  />
                  <div className={styles.relatedPlayIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className={styles.relatedVideoTitle}>{relatedVideo.title}</h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
