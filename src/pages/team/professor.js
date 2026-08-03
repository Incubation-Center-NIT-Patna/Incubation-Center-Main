import { React } from "react";
import Card from "../card/card";
import Navbar from "../Navbar";
import "./team.css";
import Footer from "../footer";

import { CLOUDINARY_BASE_URL } from "../../constants/const";

export default function Professor() {


const overallhead = [
  { 
    name: "Prof. Bharat Gupta", 
    image: `${CLOUDINARY_BASE_URL}/v1782901328/prof_bharat_gupta_ubqzlo.jpg`, 
    email: "bharat@nitp.ac.in", 
    about: "Merging future tech with purposeful leadership—pioneering advances in IoT, AI, and communication to empower innovation. Not just enabling ideas, but shaping ecosystems where technology meets entrepreneurship, and vision transforms into real-world impact"
  },
];

const professors = [
  // { name: "Alice", about: "Manages The IC", post:"President", linkedin:"#" , image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"},
  { 
    name: "Dr. Amitesh Kumar", 
    image: `${CLOUDINARY_BASE_URL}/v1782901329/dr_amitesh_kumar_nr3s4s.png`, 
    email: "amitesh.ee@nitp.ac.in", 
    about: "Driving innovation in sustainable technology — Dr. Amitesh Kumar blends renewable energy, electric vehicles, and advanced semiconductor research to power the future. With a passion for mentoring, he guides PhD scholars and leads impactful projects that bridge cutting-edge research with real-world applications. Through his work at NIT Patna, he transforms ideas into patents, publications, and solutions that shape a cleaner, smarter world."
  }, 
  { 
    name: "Dr. Devarani Devi Ningombam", 
    image: `${CLOUDINARY_BASE_URL}/v1782901327/dr_devrani_lc6crh.jpg`, 
    email: "devrani.cs@nitp.ac.in", 
    about: "Advancing intelligence with purpose — exploring Artificial Intelligence, Machine Learning, Optimization Algorithms, and Deep Learning to revolutionize Biomedical Engineering. Not just enhancing computational models, but enabling smarter healthcare solutions where technology meets human well-being"
  },
  { 
    name: "Dr. Om Ji Shukla", 
    image: `${CLOUDINARY_BASE_URL}/v1782901327/dr_omji_shukla_xejduf.jpg`, 
    email: "omjishukla.me@nitp.ac.in", 
    about: "Empowering intelligent systems for smarter industries — integrating Agent-Based Modeling, Multi-Agent Systems, and AI-driven manufacturing with advanced Operations Research, Supply Chain Management, and Data Analytics. Not just optimizing production, but shaping a future where intelligent decision-making transforms efficiency, adaptability, and innovation in industrial ecosystems"
  },
  { 
    name: "Prof. Arunangshu Ghosh", 
    image: `${CLOUDINARY_BASE_URL}/v1782901328/prof_ghosh_wkm0nd.jpg`, 
    email: "arunangshu.ghosh@nitp.ac.in", 
    about: "Driving innovation at the intersection of bio-inspired electronics and intelligent sensing — transforming the future with advancements in machine olfaction, spectroscopic instrumentation, and smart sensing systems. Not just engineering solutions, but crafting a future where interdisciplinary research empowers smarter diagnostics, sustainable technologies, and data-driven breakthroughs"
  },
  { 
    name: "Dr. Rakesh Ranjan", 
    image: `${CLOUDINARY_BASE_URL}/v1782901327/dr_rakesh_ranjan_zblmx7.jpg`, 
    email: "rr@nitp.ac.in", 
    about: "Shaping the future of connectivity — advancing Wireless Communications, IoT, Optical Technologies, and Photonics to build smarter, faster, and more resilient systems. Not just pushing the boundaries of technology, but inspiring a future where research fuels real-world impact and global innovation"
  },
  { 
    name: "Dr. Bhabani Shankar Das", 
    image: `${CLOUDINARY_BASE_URL}/v1782901327/dr_bhabani_rgkdjg.jpg`, 
    email: "bsd.ce@nitp.ac.in", 
    about: "Blending research with real-world purpose—driving excellence in river modeling and water systems with clarity and intent. It’s not just about theory, but empowering ideas with depth, precision, and progress—turning innovation into action and vision into impact"
  },
  { 
    name: "Dr. Anushree Tripathi", 
    image: `${CLOUDINARY_BASE_URL}/v1782901328/anushree_mam_hmjmza.png`, 
    email: "anushree.cs@nitp.ac.in", 
    about: "Driving digital transformation with purpose — Anushree Ma’am blends AI, Machine Learning, and innovation mentoring to fuel entrepreneurial journeys. Through the Incubation Centre, she bridges the classroom with the startup world — turning tech ideas into real-world impact."
  }, 
  { 
    name: "Dr. Meena Panchore", 
    image: `${CLOUDINARY_BASE_URL}/v1782901328/meena_mam_s4ub8r.jpg`, 
    email: "meenap.ec@nitp.ac.in", 
    about: "Merging deep expertise with passionate guidance — advancing Transistor and Transconductance research to empower innovation. Not just imparting knowledge, but shaping future engineers who will transform technology into real-world impact"
  }, 
  { 
    name: "Dr. Richa Aggarwal", 
    image: `${CLOUDINARY_BASE_URL}/v1782901329/richa_mam_iinww3.jpg`, 
    email: "richa.ec@nitp.ac.in", 
    about: "Turning innovation with purpose — advancing Wireless Networks, Security, Quantum Computing, and IoT to connect, protect, and empower our future. Not just strengthening technology, but shaping a world where knowledge drives transformation and progress"
  }
];

  

  return (
    <div className="team">
      <Navbar />
      <div className="container_header1">
        <div>
          <h1>Team</h1>
        </div>
      </div>

      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Faculty Mentors</h1>
        </div>
      </div>

      <div className="main">
        {overallhead.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin} email={info.email} isProfessor={true}/>
        ))}
        

      </div>

      <div className="main">
        {professors.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} about={info.about} linkedin={info.linkedin} email={info.email} isProfessor={true}/>
        ))}
        

      </div>
      

      <Footer />
    </div>
  );
}
