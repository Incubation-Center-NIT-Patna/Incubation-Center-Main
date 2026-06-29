
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import './Gallery.css';



// Local images from public/gallery-images/ic_startups_gallery/new-images/
const galleryImages = [
  'img1.JPG',
  'img2.JPG',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.JPG',
  'img7.JPG',
  'img8.JPG',
  'img9.JPG',
  'img10.JPG',
  'img11.JPG',
  'img12.JPG',
  'img13.JPG',
  'img14.JPG',
  'img15.JPG',
];

const Gallery = () => {
  const [imageNames, setImageNames] = useState(galleryImages);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState('in'); // 'in' or 'out'
  const timerRef = useRef(null);
  const navigate = useNavigate();


  const totalImages = imageNames.length;

  const goToIndex = useCallback((newIndex) => {
    setFadeState('out');
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFadeState('in');
    }, 400);
  }, []);

  const goNext = useCallback(() => {
    if (totalImages === 0) return;
    goToIndex((activeIndex + 1) % totalImages);
  }, [activeIndex, totalImages, goToIndex]);

  const goPrev = useCallback(() => {
    if (totalImages === 0) return;
    goToIndex((activeIndex - 1 + totalImages) % totalImages);
  }, [activeIndex, totalImages, goToIndex]);

  // Auto-advance timer
  useEffect(() => {
    if (totalImages <= 1) return;
    timerRef.current = setInterval(goNext, 3500);
    return () => clearInterval(timerRef.current);
  }, [goNext, totalImages]);

  // Get visible card indices (show 3 cards with center active)
  const getVisibleCards = () => {
    if (totalImages === 0) return [];
    if (totalImages === 1) return [{ index: 0, position: 'center' }];
    if (totalImages === 2) return [
      { index: activeIndex, position: 'center' },
      { index: (activeIndex + 1) % totalImages, position: 'right' },
    ];
    return [
      { index: (activeIndex - 1 + totalImages) % totalImages, position: 'left' },
      { index: activeIndex, position: 'center' },
      { index: (activeIndex + 1) % totalImages, position: 'right' },
    ];
  };


  const visibleCards = getVisibleCards();

  return (
    <>
      <div id="gallery" className="gallery">
        <h1 className="h11" data-aos="fade-down">Gallery</h1>

        <div className="gallery-carousel">
          {/* Left Arrow */}
          {totalImages > 1 && (
            <button className="carousel-arrow carousel-arrow-left" onClick={goPrev} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Cards */}
          <div className="carousel-cards-wrapper">
            {visibleCards.map(({ index, position }) => {
              const imgName = imageNames[index];
              const cleanName = imgName ? imgName.split('?')[0] : '';
              return (
                <div
                  className={`carousel-card carousel-card-${position} ${fadeState === 'out' ? 'carousel-fade-out' : 'carousel-fade-in'}`}
                  key={`${index}-${position}`}
                >
                  <div className="carousel-card-inner">
                    <img
                      src={`/gallery-images/ic_startups_gallery/new-images/${imgName}`}
                      alt={cleanName}
                      className="carousel-card-img"
                      loading="lazy"
                    />
                    <div className="carousel-card-overlay" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          {totalImages > 1 && (
            <button className="carousel-arrow carousel-arrow-right" onClick={goNext} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Dot Indicators */}
        {totalImages > 1 && (
          <div className="carousel-dots">
            {imageNames.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === activeIndex ? 'carousel-dot-active' : ''}`}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="events_btn" data-aos="fade-left">
          <button className='btn' onClick={() => navigate('/gallery')}>
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
