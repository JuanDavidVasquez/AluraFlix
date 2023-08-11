import React from 'react';
import CustomCarousel from './CustomCarousel';

export default function FrontedVideo() {
  const frontendData = [
    { title: 'Frontend Video 1' },
    { title: 'Frontend Video 2' },
    { title: 'Frontend Video 3' },
    { title: 'Frontend Video 4' },
    { title: 'Frontend Video 5' },
    { title: 'video' },
  ];

  return (
    <div className="front_container videos_container">
      <CustomCarousel data={frontendData} />
    </div>
  );
}
