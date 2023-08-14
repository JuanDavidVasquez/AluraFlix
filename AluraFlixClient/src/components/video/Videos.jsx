import React, { useState, useEffect } from "react";
import CustomCarousel from "./CustomCarousel";
import axios from "axios";

const groupVideosByCategory = (videos) => {
  const groupedVideos = {};

  videos.forEach((video) => {
    const category = video.categoria;

    if (!groupedVideos[category]) {
      groupedVideos[category] = [];
    }

    groupedVideos[category].push(video);
  });

  return groupedVideos;
};

export default function Videos() {
  const [videoData, setVideoData] = useState([]);

  const fetchVideos = () => {
    axios
      .get("http://127.0.0.1:8000/api/videos")
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const groupedVideos = groupVideosByCategory(videoData);

  return (
    <>
      {Object.keys(groupedVideos).map((category) => (
        <div className="videos_container" key={category}>
          <h2>{category}</h2>
          <CustomCarousel data={groupedVideos[category]} />
        </div>
      ))}
    </>
  );
}
