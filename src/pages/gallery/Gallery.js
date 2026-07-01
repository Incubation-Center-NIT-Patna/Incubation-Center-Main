import React from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
import './Gallery.css';

const galleryImages = [
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885324/img1_llfq3q.jpg', alt: 'img1.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885312/img2_oqtdxx.jpg', alt: 'img2.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885306/img3_qt0ixe.jpg', alt: 'img3.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885303/img4_kaghsf.jpg', alt: 'img4.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782885283/img5_hm4jnm.jpg', alt: 'img5.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887004/img6_btqcam.jpg', alt: 'img6.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887052/img7_j6mg4v.jpg', alt: 'img7.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887048/img8_ipfuws.jpg', alt: 'img8.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887046/img9_arcgxv.jpg', alt: 'img9.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887005/img10_l1g4dq.jpg', alt: 'img10.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887009/img11_zuxe66.jpg', alt: 'img11.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887029/img12_qcnwhw.jpg', alt: 'img12.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887043/img13_hy5rv2.jpg', alt: 'img13.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887019/img14_mu0q19.jpg', alt: 'img14.JPG' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782887029/img15_gvvduj.jpg', alt: 'img15.JPG' },

  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886259/img1.jpg', alt: 'img1.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886253/img2.jpg', alt: 'img2.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886248/img3.jpg', alt: 'img3.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886249/img4.jpg', alt: 'img4.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886261/img5.jpg', alt: 'img5.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886259/img6.jpg', alt: 'img6.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886256/img7.jpg', alt: 'img7.jpg' },
  { src: 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782886255/img8.jpg', alt: 'img8.jpg' },
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
                  loading="lazy"
                  decoding="async"
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
