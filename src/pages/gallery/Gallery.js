import React from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
import './Gallery.css';

// Local images from public/gallery-images/
const galleryImages = [
  // From ic_startups_gallery/new-images/
  { src: '/gallery-images/ic_startups_gallery/new-images/img1.JPG', alt: 'img1.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img2.JPG', alt: 'img2.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img3.jpg', alt: 'img3.jpg' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img4.jpg', alt: 'img4.jpg' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img5.jpg', alt: 'img5.jpg' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img6.JPG', alt: 'img6.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img7.JPG', alt: 'img7.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img8.JPG', alt: 'img8.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img9.JPG', alt: 'img9.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img10.JPG', alt: 'img10.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img11.JPG', alt: 'img11.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img12.JPG', alt: 'img12.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img13.JPG', alt: 'img13.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img14.JPG', alt: 'img14.JPG' },
  { src: '/gallery-images/ic_startups_gallery/new-images/img15.JPG', alt: 'img15.JPG' },
  // From ic_startups_gallery/
  { src: '/gallery-images/ic_startups_gallery/img1.jpg', alt: 'img1.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img2.jpg', alt: 'img2.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img3.jpg', alt: 'img3.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img4.jpg', alt: 'img4.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img5.jpg', alt: 'img5.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img6.jpg', alt: 'img6.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img7.jpg', alt: 'img7.jpg' },
  { src: '/gallery-images/ic_startups_gallery/img8.jpg', alt: 'img8.jpg' },
];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="container_header1">
        <h1>ALL EVENT PHOTOS</h1>
      </div>
      <div id="gallery" className="gallery">
        <h1 className="h11" data-aos="fade-down">Gallery</h1>
        <div className="gallery1">
          {galleryImages.map((img, idx) => (
            <div className="gallerydiv" key={idx}>
              <div className="imgdiv" data-aos="zoom-in">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="imgg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
