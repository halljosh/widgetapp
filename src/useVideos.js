import { useState, useEffect } from 'react';
import youtube from './youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const KEY = 'AIzaSyCidtlMoKhnFTWAQAHtU3WkdUj84i-lZY8';

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            },
        });
        setVideos(response.data.items);
    };
    return [videos, search];
};

export default useVideos;