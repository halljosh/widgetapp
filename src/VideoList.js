import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect, class0 }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
        );
    });
    return <div className={"ui relaxed divided list " + class0}>{renderedList}</div>;
};

export default VideoList;