import React, { useEffect, useState } from 'react';
import './card.css';
import Navbar from '../../Navbar';
import { incubationsData } from '../incubationsData.js';

const FALLBACK_IMAGE = 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782890649/fliptoknow_glfbbw.png';
const HEADER_IMAGE = 'https://res.cloudinary.com/ddb6lsyht/image/upload/v1782897292/NITP_new_campus_gxybjz.jpg';
const ITEMS_PER_PAGE = 5;

function Pag() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(incubationsData.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const visibleStart = startIndex;
  const visibleEnd = Math.min(startIndex + ITEMS_PER_PAGE, incubationsData.length);
  const visibleStartups = incubationsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage((previousPage) => Math.min(previousPage, totalPages));
  }, [totalPages]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [safePage]);

  const goToPage = (pageNumber) => {
    const nextPage = Math.min(Math.max(pageNumber, 1), totalPages);
    setCurrentPage(nextPage);
  };

  const paginationItems = [];
  const pageSet = new Set([1, totalPages, safePage - 1, safePage, safePage + 1]);

  Array.from(pageSet)
    .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
    .sort((firstPage, secondPage) => firstPage - secondPage)
    .forEach((pageNumber, index, pages) => {
      const previousPage = pages[index - 1];
      if (previousPage && pageNumber - previousPage > 1) {
        paginationItems.push('ellipsis-' + previousPage);
      }
      paginationItems.push(pageNumber);
    });

  return (
    <div className="cards_pag">
      <Navbar />

      <header
        className="container_header"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5, 8, 16, 0.18) 0%, rgba(5, 8, 16, 0.92) 100%), url(${HEADER_IMAGE})`,
        }}
      >
        <div className="container_header__content">
          <p className="container_header__eyebrow">Incubation Center</p>
          <h1>All Startups</h1>
          <p className="container_header__copy">
            Explore the full set of incubated startups in one place. Each card shows the startup name, a short summary, and contact details when available.
          </p>
        </div>
      </header>

      <main className="main">
        <section className="startup-grid" aria-label="Incubated startups">
          {visibleStartups.map((startup, index) => {
            const absoluteIndex = visibleStart + index;
            const imageSrc = startup.img && startup.img.trim()
              ? `/${startup.img.replace(/^\//, '')}`
              : FALLBACK_IMAGE;

            return (
              <article className="startup-card" key={`${startup.name}-${absoluteIndex}`}>
                <div className="startup-card__image-wrap">
                  <img
                    src={imageSrc}
                    alt={startup.name}
                    className="startup-card__image"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </div>

                <div className="startup-card__body">
                  <p className="startup-card__index">{String(absoluteIndex + 1).padStart(2, '0')}</p>
                  <h2 className="title">{startup.name}</h2>
                  <p className="card__description">{startup.description || 'Description coming soon.'}</p>

                  {startup.email && (
                    <p className="card__email">
                      Contact: <a href={`mailto:${startup.email}`}>{startup.email}</a>
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        <div className="pagination_shell mt-5">
          <div className="pagination_bar" aria-label="Startup pagination">
            <button
              type="button"
              className="pagination_button"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
            >
              Previous
            </button>

            <div className="pagination_numbers" role="navigation" aria-label="Page numbers">
              {paginationItems.map((item) => (
                typeof item === 'number' ? (
                  <button
                    key={item}
                    type="button"
                    className={`pagination_number ${item === safePage ? 'is-active' : ''}`}
                    onClick={() => goToPage(item)}
                    aria-current={item === safePage ? 'page' : undefined}
                  >
                    {item}
                  </button>
                ) : (
                  <span key={item} className="pagination_ellipsis" aria-hidden="true">
                    ...
                  </span>
                )
              ))}
            </div>

            <button
              type="button"
              className="pagination_button"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
            >
              Next
            </button>
          </div>

          <p className="pagination_status">
          Showing {visibleStart + 1}-{visibleEnd} of {incubationsData.length} startups
          </p>
        </div>
      </main>
    </div>
  );
}

export default Pag;