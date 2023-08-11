import React from 'react';
import CustomCarousel from './CustomCarousel';

export default function BackendVideo() {
  const backendData = [
    { title: 'Backend Video 1' },
    { title: 'Backend Video 2' },
    { title: 'Backend Video 3' },
    { title: 'Backend Video 4' },
    { title: 'Backend Video 5' },
    { title: 'video' },
  ];

  return (
    <div className="backend_container videos_container">
      <CustomCarousel data={backendData} />
    </div>
  );
}
