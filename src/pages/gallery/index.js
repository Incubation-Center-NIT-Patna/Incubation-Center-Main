import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Gallery.css";

// Local images from public/gallery-images/ic_startups_gallery/new-images/
const galleryImages = [
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885324/img1_llfq3q.jpg",
    alt: "img1.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885312/img2_oqtdxx.jpg",
    alt: "img2.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885306/img3_qt0ixe.jpg",
    alt: "img3.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885303/img4_kaghsf.jpg",
    alt: "img4.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885283/img5_hm4jnm.jpg",
    alt: "img5.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887004/img6_btqcam.jpg",
    alt: "img6.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887052/img7_j6mg4v.jpg",
    alt: "img7.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887048/img8_ipfuws.jpg",
    alt: "img8.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887046/img9_arcgxv.jpg",
    alt: "img9.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887005/img10_l1g4dq.jpg",
    alt: "img10.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887009/img11_zuxe66.jpg",
    alt: "img11.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887029/img12_qcnwhw.jpg",
    alt: "img12.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887043/img13_hy5rv2.jpg",
    alt: "img13.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887019/img14_mu0q19.jpg",
    alt: "img14.JPG",
  },
  {
    src: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887029/img15_gvvduj.jpg",
    alt: "img15.JPG",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("in"); // 'in' or 'out'
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const images = galleryImages;
  const totalImages = images.length;

  const goToIndex = useCallback((newIndex) => {
    setFadeState("out");
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFadeState("in");
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
    if (totalImages === 1) return [{ index: 0, position: "center" }];
    if (totalImages === 2)
      return [
        { index: activeIndex, position: "center" },
        { index: (activeIndex + 1) % totalImages, position: "right" },
      ];
    return [
      {
        index: (activeIndex - 1 + totalImages) % totalImages,
        position: "left",
      },
      { index: activeIndex, position: "center" },
      { index: (activeIndex + 1) % totalImages, position: "right" },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <>
      <div id="gallery" className="gallery">
        <h1 className="h11" data-aos="fade-down">
          Gallery
        </h1>

        <div className="gallery-carousel">
          {/* Left Arrow */}
          {totalImages > 1 && (
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Cards */}
          <div className="carousel-cards-wrapper">
            {visibleCards.map(({ index, position }) => {
              const image = images[index];

              return (
                <div
                  key={`${index}-${position}`}
                  className={`carousel-card carousel-card-${position} ${
                    fadeState === "out"
                      ? "carousel-fade-out"
                      : "carousel-fade-in"
                  }`}
                >
                  <div className="carousel-card-inner">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="carousel-card-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="carousel-card-overlay" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          {totalImages > 1 && (
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goNext}
              aria-label="Next image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* Dot Indicators */}
        {totalImages > 1 && (
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === activeIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="events_btn" data-aos="fade-left">
          <button className="btn" onClick={() => navigate("/gallery")}>
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
