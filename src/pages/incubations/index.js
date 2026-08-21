import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { incubationsData } from './incubationsData.js';


import { register } from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import "./style.css";
register();

const Incubations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className='incubations' id='incubations'>

        <div className="incubations_header">
          <h1 data-aos="fade-down" style={{ color: "#0ef" }}>Incubations</h1>
          <p data-aos="fade-right"> NIT Patna's Incubation Center fosters a statewide startup ecosystem, offering essential infrastructure like office spaces, meeting rooms, networking platforms, and management support for aspiring entrepreneurs.</p>
        </div>

        <div className="incubations_swiper">
          <swiper-container
            class="card__incubations swiper"
            effect="coverflow"
            grab-cursor="true"
            centered-slides="true"
            slides-per-view="auto"
            coverflow-effect={JSON.stringify({
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            })}
            space-between="30"
            loop="true"
            autoplay-delay="3000"
            autoplay-disable-on-interaction="false"
            breakpoints={JSON.stringify({
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1440: { slidesPerView: 3, spaceBetween: 50 },
            })}
          >

            {incubationsData.map((item, index) => {
              const hasImage = item.img && item.img.trim() !== "";
              return (
              <swiper-slide key={index}>
                <article className="productions_card">
                  <div className={`card__image${!hasImage ? " show-fallback" : ""}`}>
                    <img
                      src={item.img}
                      alt="incubation"
                      className="card__img"
                      onError={(e) => {
                        e.currentTarget.parentElement.classList.add("show-fallback");
                      }}
                    />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__incubationdata">
                    <h3 className="card__name">{item.name}</h3>
                    <p className="card__description">
                      {item.description}
                    </p>
                    {item.email && (
                      <p className='card_contact_email'>Contact: <a href={`mailto:${item.email}`}>{item.email}</a></p>
                    )}

                    <div className="card_footer">
                      <a href="/" className="card__button">View More</a>
                    </div>
                  </div>
                </article>
              </swiper-slide>
            );
            })}
          </swiper-container>

        </div>


        {/* <!-- Navigation buttons --> */}
        {/* <div className="swiper-button-next">
        <i className="ri-arrow-right-s-line"></i>
      </div>

      <div className="swiper-button-prev">
        <i className="ri-arrow-left-s-line"></i>
      </div> */}

        {/* <!-- Pagination --> */}

        <div className="swiper-pagination"></div>
        <div className="incubations_btn_container">
          <button className='incubations_btn' onClick={() => navigate('/pag')}>
            Read More</button>
        </div>

      </section>

    </div>



  );
};

export default Incubations