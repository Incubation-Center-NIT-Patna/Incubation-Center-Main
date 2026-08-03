import React from "react";
import "./style.css";
import Footer from "../../footer";
import Navbar from "../../Navbar";
import { ic_logo } from "../../../constants/const";

const eventsTimelineData = [
  {
    logo: ic_logo,
    title: "Orientation Session 2023",
    date: "21/09/2023",
    description:
      "The orientation program aimed to familiarize the students of 2023 batch with the Incubation Centre (IC) at NIT Patna and its pivotal role in cultivating entrepreneurship among students while fostering innovation.",
  },
  {
    logo: ic_logo,
    title: "PitchTember 2023",
    date: "24/11/2023 to 18/12/2023",
    description:
      "It is a multitude of events, including Udhyamita, Uthaan, Unnayan, and workshops, facilitated extensive participation from students across various universities. With 1000+ students presenting 67+ innovative ideas, the event celebrated excellence by recognizing noteworthy contributions.",
  },
  {
    logo: ic_logo,
    title: "Orientation Session 2023",
    date: "21/09/2023",
    description:
      "The IPSIT Stock Market Simulation, sponsored by StockGro, provided participants with an immersive and educational experience in virtual stock trading without financial risk. Each participant was allocated 10 lakh virtual money for a day of trading on actual stocks. Almost 300 participants showcased their interest, emphasizing the importance of effective trading strategies in achieving success.",
  },
];

function Timeline() {
  return (
    <div className="events_timeline">
      <Navbar />
      <div className="container_header">
        <div>
          <h1>Events Timeline</h1>
        </div>
      </div>
      <div className="timeline">
        {eventsTimelineData.map((event, index) => (
          <div
            className={`container ${index % 2 === 0 ? "left" : "right"}-container`}
          >
            <img src={event.logo} alt="logo" />
            <div className="text-box">
              <h2>{event.title}</h2>
              <small>{event.date}</small>
              <p>{event.description}</p>
            </div>
            <span
              className={`${index % 2 === 0 ? "left" : "right"}-container-arrow`}
            ></span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Timeline;
