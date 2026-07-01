import React from "react";
import { pitchtember_url } from "../../constants/const";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const eventsData = [
  {
    title: "Orientation Session 2023",
    date: "21/09/2023",
    venue: "CV Raman Hall",
    image: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782890669/orientation_fdo0yp.jpg",
    url: "/timeline",
  },
  {
    title: "PitchTember 2023",
    date: "24/11/2023 to 18/12/2023",
    venue: "CV Raman Hall",
    image: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782890669/pitchtember_ax6djs.jpg",
    url: pitchtember_url,
  },
  {
    title: "Stock Market Simulation",
    date: "09/02/2024",
    venue: "Online",
    image: "https://res.cloudinary.com/ddb6lsyht/image/upload/v1782890671/sms_a5537x.jpg",
    url: "/timeline",
  },
];

const Events = () => {
  React.useEffect(() => {
    const track = document.querySelector(".events_slider_track");
    if (track) track.innerHTML += track.innerHTML;
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <section className="events" id="events">
        <div className="event_header">
          <h1 data-aos="fade-down" style={{ color: "#0ef" }}>
            Events
          </h1>
          <p data-aos="fade">
            The Incubation Center organizes transformative events that empower
            entrepreneurs with knowledge, networking opportunities, and
            practical skills. These events foster innovation, collaboration, and
            growth within the startup community, driving forward impactful
            business ventures.{" "}
          </p>
        </div>
        {/* <div className="events_box"  >
          
        </div> */}

        <div className="events_slider">
          <div className="events_slider_track">
            {eventsData.map((event, index) => (
                <div className="flip-card" data-aos="flip-left">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={event.image} alt="event" loading="lazy" />
                    </div>
                    <div className="flip-card-back">
                      <h1>{event.title}</h1>
                      <p>Date: {event.date}</p>
                      <p>Venue: {event.venue}</p>
                      <Link to={event.url} className="btn">
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="events_btn">
          <Link to="/timeline" className="btn">
            View More →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
