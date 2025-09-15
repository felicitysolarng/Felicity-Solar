'use client';

import React from 'react';

interface VideoWidgetProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

const VideoWidget: React.FC<VideoWidgetProps> = ({ videoUrl, title, className = '' }) => {
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Extract video ID from the URL
  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) {
    return (
      <div className={`p-4 bg-gray-100 rounded-lg text-center ${className}`}>
        <p className="text-gray-500">Invalid YouTube URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const thumbnailUrl = getYouTubeThumbnail(videoId);

  return (
    <div className={`video-widget ${className}`}>
     
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={embedUrl}
          title={title || 'Product Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
   
    </div>
  );
};

export default VideoWidget;