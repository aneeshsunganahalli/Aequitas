// Video data structure
export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  description?: string;
}

// Extract YouTube ID from URL
export const extractYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : '';
};

// Video database
export const videos: Video[] = [
  {
    id: '1',
    youtubeId: 'ApawZavQvDM',
    title: 'Video 1',
    thumbnail: 'https://img.youtube.com/vi/ApawZavQvDM/maxresdefault.jpg',
    description: 'Watch this amazing video about justice and fairness.'
  },
  {
    id: '2',
    youtubeId: 'nXUbnfMz65w',
    title: 'Video 2',
    thumbnail: 'https://img.youtube.com/vi/nXUbnfMz65w/maxresdefault.jpg',
    description: 'Explore the concepts of equity and balance.'
  },
  {
    id: '3',
    youtubeId: 'rOq1gWyz4DQ',
    title: 'Video 3',
    thumbnail: 'https://img.youtube.com/vi/rOq1gWyz4DQ/maxresdefault.jpg',
    description: 'Understanding ancient Roman principles.'
  },
  {
    id: '4',
    youtubeId: '1piFEKA9XL0',
    title: 'Video 4',
    thumbnail: 'https://img.youtube.com/vi/1piFEKA9XL0/maxresdefault.jpg',
    description: 'Modern applications of classical justice.'
  }
];

// Get video by ID
export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};
