import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const BASE_URL = "https://res.cloudinary.com/ddb6lsyht/image/upload/f_auto,q_auto:good,w_600/";

const galleryImages = [
  { id: "img1", src: `${BASE_URL}v1782885324/img1_llfq3q.jpg`, alt: "img1" },
  { id: "img2", src: `${BASE_URL}v1782885312/img2_oqtdxx.jpg`, alt: "img2" },
  { id: "img3", src: `${BASE_URL}v1782885306/img3_qt0ixe.jpg`, alt: "img3" },
  { id: "img4", src: `${BASE_URL}v1782885303/img4_kaghsf.jpg`, alt: "img4" },
  { id: "img5", src: `${BASE_URL}v1782885283/img5_hm4jnm.jpg`, alt: "img5" },
  { id: "img6", src: `${BASE_URL}v1782887004/img6_btqcam.jpg`, alt: "img6" },
  { id: "img7", src: `${BASE_URL}v1782887052/img7_j6mg4v.jpg`, alt: "img7" },
  { id: "img8", src: `${BASE_URL}v1782887048/img8_ipfuws.jpg`, alt: "img8" },
  { id: "img9", src: `${BASE_URL}v1782887046/img9_arcgxv.jpg`, alt: "img9" },
  { id: "img10", src: `${BASE_URL}v1782887005/img10_l1g4dq.jpg`, alt: "img10" },
  { id: "img11", src: `${BASE_URL}v1782887009/img11_zuxe66.jpg`, alt: "img11" },
  { id: "img12", src: `${BASE_URL}v1782887029/img12_qcnwhw.jpg`, alt: "img12" },
  { id: "img13", src: `${BASE_URL}v1782887043/img13_hy5rv2.jpg`, alt: "img13" },
  { id: "img14", src: `${BASE_URL}v1782887019/img14_mu0q19.jpg`, alt: "img14" },
  { id: "img15", src: `${BASE_URL}v1782887029/img15_gvvduj.jpg`, alt: "img15" },
];

const GalleryPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("in");
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const totalImages = galleryImages.length;

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

  useEffect(() => {
    if (totalImages <= 1) return;
    timerRef.current = setInterval(goNext, 3500);
    return () => clearInterval(timerRef.current);
  }, [goNext, totalImages]);

  const getVisibleCards = () => {
    if (totalImages === 0) return [];
    if (totalImages === 1) return [{ index: 0, position: "center" }];
    if (totalImages === 2) {
      return [
        { index: activeIndex, position: "center" },
        { index: (activeIndex + 1) % totalImages, position: "right" },
      ];
    }
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
    <div id="gallery" className="gallery">
      <h1 className="h11" data-aos="fade-down">
        Gallery
      </h1>

      <div className="gallery-carousel">
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

        <div className="carousel-cards-wrapper">
          {visibleCards.map(({ index, position }) => {
            const image = galleryImages[index];

            return (
              <div
                key={`${image.id}-${position}`}
                className={`carousel-card carousel-card-${position} ${
                  fadeState === "out" ? "carousel-fade-out" : "carousel-fade-in"
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

      {totalImages > 1 && (
        <div className="carousel-dots">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${
                idx === activeIndex ? "carousel-dot-active" : ""
              }`}
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
  );
};

export default GalleryPreview;