import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./style.css";

const BASE_URL = "https://res.cloudinary.com/ddb6lsyht/image/upload/f_auto,q_auto:good,w_800/";
const FULL_URL = "https://res.cloudinary.com/ddb6lsyht/image/upload/f_auto,q_auto:good,w_1920/";

const createImg = (id, path, alt) => ({
  id,
  src: `${BASE_URL}${path}`,
  fullSrc: `${FULL_URL}${path}`,
  alt,
});

const fullGalleryImages = [
  createImg("g1", "v1782885324/img1_llfq3q.jpg", "Event Photo 1"),
  createImg("g2", "v1782885312/img2_oqtdxx.jpg", "Event Photo 2"),
  createImg("g3", "v1782885306/img3_qt0ixe.jpg", "Event Photo 3"),
  createImg("g4", "v1782885303/img4_kaghsf.jpg", "Event Photo 4"),
  createImg("g5", "v1782885283/img5_hm4jnm.jpg", "Event Photo 5"),
  createImg("g6", "v1782887004/img6_btqcam.jpg", "Event Photo 6"),
  createImg("g7", "v1782887052/img7_j6mg4v.jpg", "Event Photo 7"),
  createImg("g8", "v1782887048/img8_ipfuws.jpg", "Event Photo 8"),
  createImg("g9", "v1782887046/img9_arcgxv.jpg", "Event Photo 9"),
  createImg("g10", "v1782887005/img10_l1g4dq.jpg", "Event Photo 10"),
  createImg("g11", "v1782887009/img11_zuxe66.jpg", "Event Photo 11"),
  createImg("g12", "v1782887029/img12_qcnwhw.jpg", "Event Photo 12"),
  createImg("g13", "v1782887043/img13_hy5rv2.jpg", "Event Photo 13"),
  createImg("g14", "v1782887019/img14_mu0q19.jpg", "Event Photo 14"),
  createImg("g15", "v1782887029/img15_gvvduj.jpg", "Event Photo 15"),
  createImg("g16", "v1782886259/img1.jpg", "Event Photo 16"),
  createImg("g17", "v1782886253/img2.jpg", "Event Photo 17"),
  createImg("g18", "v1782886248/img3.jpg", "Event Photo 18"),
  createImg("g19", "v1782886249/img4.jpg", "Event Photo 19"),
  createImg("g20", "v1782886261/img5.jpg", "Event Photo 20"),
  createImg("g21", "v1782886259/img6.jpg", "Event Photo 21"),
  createImg("g22", "v1782886256/img7.jpg", "Event Photo 22"),
  createImg("g23", "v1782886255/img8.jpg", "Event Photo 23"),
];

const INITIAL_LOAD_COUNT = 10;
const BATCH_LOAD_COUNT = 5;

const GalleryPage = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const observerRef = useRef(null);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_LOAD_COUNT, fullGalleryImages.length));
  }, []);

  const sentinelRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && visibleCount < fullGalleryImages.length) {
            loadMore();
          }
        },
        { rootMargin: "200px" }
      );

      if (node) observerRef.current.observe(node);
    },
    [loadMore, visibleCount]
  );

  const openLightbox = (index) => {
    setIsImageLoading(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    setIsImageLoading(true);
    setLightboxIndex((prev) =>
      prev === 0 ? fullGalleryImages.length - 1 : prev - 1
    );
  }, []);

  const nextImage = useCallback(() => {
    setIsImageLoading(true);
    setLightboxIndex((prev) =>
      prev === fullGalleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (lightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex, nextImage, prevImage]);

  const visibleImages = fullGalleryImages.slice(0, visibleCount);

  return (
    <div className="gallery-page">
      <Navbar />

      {/* Header Container */}
      <header className="gallery-header-container">
        <h1>ALL EVENT PHOTOS</h1>
      </header>

      {/* Image Gallery Container */}
      <main className="gallery-images-container">
        <div className="gallery-grid">
          {visibleImages.map((img, idx) => (
            <div className="gallery-grid__item" key={img.id}>
              <div
                className="gallery-grid__img-wrapper"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

        {visibleCount < fullGalleryImages.length && (
          <div ref={sentinelRef} className="gallery-grid__sentinel" />
        )}
      </main>

      {/* Footer Container */}
      <footer className="gallery-footer-container">
        <Footer />
      </footer>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox__overlay"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-lightbox__btn gallery-lightbox__btn--close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            <button
              className="gallery-lightbox__btn gallery-lightbox__btn--prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ❮
            </button>

            <div className="gallery-lightbox__img-container">
              {/* Animated Loader Spinner */}
              {isImageLoading && (
                <div className="gallery-lightbox__spinner">
                  <div className="spinner-ring"></div>
                </div>
              )}

              <img
                src={fullGalleryImages[lightboxIndex].fullSrc}
                alt={fullGalleryImages[lightboxIndex].alt}
                className={`gallery-lightbox__img ${
                  isImageLoading ? "gallery-lightbox__img--loading" : ""
                }`}
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
              />
              
              <div className="gallery-lightbox__counter">
                {lightboxIndex + 1} / {fullGalleryImages.length}
              </div>
            </div>

            <button
              className="gallery-lightbox__btn gallery-lightbox__btn--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;