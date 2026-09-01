import React from 'react';
import "./style.css";
import IdeaJs from './idea.js';

const Idea = () => {
  return (
    <div>
      <section className="idea" id="idea">
        <h1 data-aos="fade-down">Incubate Your <span style={{ color: "#0ef" }}>Idea</span></h1>
        <div className='form' data-aos="fade-up">
          <form action="#" onSubmit={IdeaJs}>

            <div className="input-box">
              <div className="input-field field">
                <input type="text" placeholder="Full Name" id="name" name="name" className="item" autoComplete="off" />
                <div className="error-txt">Full Name can't be blank</div>
              </div>
              <div className="input-field field">
                <input type="text" placeholder="Email Address" id="email" name="email" className="item" autoComplete="off" />
                <div className="error-txt email">Email Address can't be blank</div>
              </div>
            </div>

            <div className="input-box">
              <div className="input-field field">
                <input type="text" placeholder="Phone Number" id="phone" name="phone" className="item" autoComplete="off" />
                <div className="error-txt">Phone Number can't be blank</div>
              </div>
              <div className="input-field field">
                <input type="text" placeholder="Subject" id="subject" name="subject" className="item" autoComplete="off" />
                <div className="error-txt">Subject can't be blank</div>
              </div>
            </div>

            <div className="textarea-field field">
              <textarea id="message" name="message" cols="30" rows="6" className="item" placeholder="Your Message" autoComplete="off"></textarea>
              <div className="error-txt">Message can't be blank</div>
            </div>

            <button type="submit">Submit →</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Idea;