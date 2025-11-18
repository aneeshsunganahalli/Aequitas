import Link from 'next/link';
import Image from 'next/image';
import { videos } from '@/lib/videos';
import styles from './videos.module.css';

export default function VideosPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Videos</h1>
        <p className={styles.subtitle}></p>
      </div>

      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <Link 
            key={video.id} 
            href={`/videos/${video.id}`}
            className={styles.videoCard}
          >
            <div className={styles.thumbnailWrapper}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={480}
                height={270}
                className={styles.thumbnail}
              />
              <div className={styles.playOverlay}>
                <svg 
                  className={styles.playIcon}
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>{video.title}</h3>
              {video.description && (
                <p className={styles.videoDescription}>{video.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
