
  
import React, { useState, useEffect } from 'react';

function VideosFeed() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const video_http = "https://www.googleapis.com/youtube/v3/videos?";
        const channel_http = "https://www.googleapis.com/youtube/v3/channels?";
        const apiKey = "AIzaSyCfb_dbqqDcTrhMB8UFe5Flh-zg53OQR6Y";

        fetch(video_http + new URLSearchParams({
            key: apiKey,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 50,
            regionCode: 'BR'
        }))
        .then(res => res.json())
        .then(data => {
            console.log("Número de vídeos coletados:", data.items.length);
            data.items.forEach(item => {
                getChannelIcon(item);
            });
        })
        .catch(err => console.log(err));

        const getChannelIcon = (video_data) => {
            fetch(channel_http + new URLSearchParams({
                key: apiKey,
                part: 'snippet',
                id: video_data.snippet.channelId
            }))
            .then(res => res.json())
            .then(data => {
                video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
                setVideos(prevState => [...prevState, video_data]);
            });
        }
    }, []); // Empty dependency array ensures this effect runs only once

    const makeVideoCard = (data) => {
        return (
                <div className="video" onClick={() => window.location.href = `https://youtube.com/watch?v=${data.id}`}>
                    <img src={data.snippet.thumbnails.high.url} className="thumbnail" alt=""/>
                    <div className="content">
                        <img src={data.channelThumbnail} className="channel-icon" alt=""/>
                        <div className="info">
                            <h4 className="title">{data.snippet.title}</h4>
                            <p className="channel-name">{data.snippet.channelTitle}</p>
                        </div>
                    </div>
                </div>
        );
    }

    return (
        <div className = "video-container">
            {videos.map((video, index) => (
                    <div key={index}>
                        {makeVideoCard(video)}
                    </div>
                ))}
        </div>
    );
}

export default VideosFeed;
