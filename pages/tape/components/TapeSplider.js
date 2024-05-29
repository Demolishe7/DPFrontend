// TapeSplider.js
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import yoga from './../../../images/yoga.jpeg';

const TapeSplider = ({ selectedImage }) => {
  const spliderOptions = {
    perPage: 1,
    perMove: 1,
    gap: '20px',
    drag: false,
  };

  // Если выбранная фотография не установлена, используем yoga.jpeg по умолчанию
  const imageSrc = selectedImage || yoga;

  return (
    <Splide hasTrack={true} options={spliderOptions}>
      <SplideSlide>
        <div className="image" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="note">
          <p>Напишите <br /> заметку</p>
          <textarea name="" id="" style={{ flex: '1', width: '100%' }} onClick={(e) => e.preventDefault()}></textarea>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default TapeSplider;