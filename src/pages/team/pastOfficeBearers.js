import React from "react";
import { pastMembersData } from "./data";
import Card from "../card/card";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./pastOfficeBearers.css";

export default function PastMembers() {

  const pastMembers = pastMembersData.sort((prev,next)=>{   //arranged data in descending yearwise order
    const yearA = parseInt(prev.year.split("-")[0], 10);
    const yearB = parseInt(next.year.split("-")[0], 10);

    return yearB-yearA;
  });

  return (
    <div className="past-members">
      <Navbar />
      
      <div className="past-banner">
        <div className="past-banner-content">
          <h1>Past Office Bearers</h1>
          <p>Honouring the leaders who shaped our journey</p>
        </div>
      </div>

      {pastMembers.map((session, sessionIndex) => (
        <div key={sessionIndex} className="session-container">
          <div className="session-header">
            <div>
              <h1>{session.year}</h1>
            </div>
          </div>

          {session.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="role-section">
              <div className="role-title">
                <h3>{section.title}</h3>
              </div>

              <div className="members-container">
                {section.members.map((member, memberIndex) => (
                  <Card
                    key={memberIndex}
                    name={member.name}
                    post={member.post}
                    role={member.about}
                    image={member.image}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <Footer />
    </div>
  );
}
