import React from 'react';
import "./style.css";

const Faqs = () => {
  return (
    <div className='faq'>
    <div className='faqs'>
      <h1 className="centerplease" data-aos="fade-down">
        FAQS
      </h1>
      <br />

      <div className="content">
        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question1" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question1" className="question">
            What is the Incubation Center at NIT Patna?
            </label>
          </div>
          <div className="answers">
          A facility supporting startups with resources like mentorship, workspace, and funding.</div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question2" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question2" className="question">
            Who can apply?
            </label>
          </div>
          <div className="answers">
          Students, alumni, faculty, and early-stage entrepreneurs.
          </div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question3" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question3" className="question">
            What services are offered?
            </label>
          </div>
          <div className="answers">
          Office space, mentorship, business support, and networking opportunities.
          </div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question4" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question4" className="question">
           What support does the Incubation Centre provide?
            </label>
          </div>
          <div className="answers">
          We offer:
          Mentorship from industry experts and faculty
          Co-working space 
          Networking opportunities with investors and startups
          </div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question5" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question5" className="question">
            How can I contact the Incubation Centre?
            </label>
          </div>
          <div className="answers">
           Reach out to us through the contact form on our website or email us directly at <a href="mailto:Incubation@nitp.ac.in" style={{color: '#0ef', textDecoration: 'none'}}>Incubation@nitp.ac.in</a>.
          </div>
        </div>
      
        {/* <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question4" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question1" className="question">
            How long is the incubation period?
            </label>
          </div>
          <div className="answers">
          Typically 6 months to 2 years.</div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question5" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question2" className="question">
            Does the center provide funding?
            </label>
          </div>
          <div className="answers">
          Yes, seed funding or connections to investors may be available.
          </div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question6" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question3" className="question">
            How to apply?
            </label>
          </div>
          <div className="answers">
          Submit an application via the center’s website.
          </div>
        </div>

        <div className='contentDiv' data-aos="fade-up" >
          <input type="checkbox" id="question7" name="q" className="questions" />
          <div className='outer'>
            <div className="plus">+</div>
            <label htmlFor="question3" className="question">
            What are the selection criteria?
            </label>
          </div>
          <div className="answers">
          Innovation, feasibility, market potential, and team strength.
          </div>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default Faqs