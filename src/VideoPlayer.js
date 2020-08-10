import React, { useState, useEffect } from 'react';
import VideoSearchBar from './VideoSearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from './useVideos';
import './stylin.css';

const VideoPlayer = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('undead splatoon');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <VideoSearchBar onFormSubmit={search} />
            <div className="ui grid vidcontainer">
                <div className="ui row">
                    <div className="eleven wide column mainvid">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList class0 = "weblist" onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
                    </div>
                    <VideoList class0 = "mobilelist" onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;