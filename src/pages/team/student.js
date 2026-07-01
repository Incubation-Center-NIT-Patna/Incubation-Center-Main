import { React } from "react";
import {
  student_coordinator_linkedin,
  student_cocoordinator_1_linkedin,
  student_cocoordinator_2_linkedin,
  secretary_linkedin,
  design_coordinator_linkedin,
  web_coordinator_linkedin,
  content_coordinator_linkedin,
  media_coordinator_linkedin,
  technical_coordinator_linkedin,
  pr_coordinator_linkedin,
  event_lead_linkedin,
  core_lead_linkedin,
  event_colead_1_linkedin,
  event_colead_2_linkedin,
  web_colead_linkedin,
  design_colead_linkedin,
  media_colead_linkedin,
  technical_colead_linkedin,
  core_colead_linkedin,
  pr_colead_linkedin,
  content_colead_linkedin
} from '../../constants/const';
import Card from "../card/card";
import Navbar from "../Navbar";
import "./team.css";
import Footer from "../footer";
import { CLOUDINARY_BASE_URL } from "../../constants/const";

export default function Student() {


const studentCoordinator = [
  { 
    name: "Himanshu Bharti", 
    about: "Leading from the front with clarity and confidence—turning vision into action, aligning every step with purpose, and ensuring that even the smallest detail reflects dedication, passion, and a deep sense of responsibility. It's not just about direction, but about inspiring momentum and making ideas come alive with intent and impact.", 
    post: "Student Co-ordinator", 
    linkedin: student_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901449/himanshu_bharti_tepyp3.jpg` 
  }
];

//student-co-coordinators
const studentCocoordinator = [
  { 
    name: "Sameer Gupta", 
    about: "Balancing leadership and teamwork with ease — orchestrating every move behind the scenes to keep the show running smoothly and the spirit alive.", 
    post: "Student Co-ordinator", 
    linkedin: student_cocoordinator_1_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901453/sameer_gupta_pwg1mi.jpg` 
  },
  { 
    name: "Arpita Dwivedi", 
    about: "Blending grace with grit, handling every challenge with a smile — ensuring every plan unfolds perfectly, no matter what comes her way.", 
    post: "Student Co-ordinator", 
    linkedin: student_cocoordinator_2_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901447/arpita_dwivedi_zyvifw.jpg` 
  }
];

//secretary
const secretary = [
  { 
    name: "Ashish Yadav", 
    about: "Officially Secretary of NITP Incubation Centre now! Still a UI/UX nerd at heart Coding by day. Loves: Dogs  (my real bosses), Sleep  (my longest relationship), Nature (OG designer), Workout (pain with benefits). Dislikes: Patna Weather  (Schrödinger’s season).", 
    post: "Secretary", 
    linkedin: secretary_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901448/ashish_yadav_yabczj.jpg` 
  }
];

//committee coordinators
const committeeCoordinator = [
  { 
    name: "Sumit Vishwakarma", 
    about: "Blending creativity with strategy, shaping narratives that inform, inspire, and elevate every message with clarity and thoughtful expression.", 
    post: "Design Team Committee Co-ordinator", 
    linkedin: design_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901456/sumit_vishwakarma_d59que.jpg` 
  },
  { 
    name: "Manikanta", 
    about: "Building seamless digital experiences with precision and passion, ensuring every click leads to clarity, connection, and innovation behind the screen.", 
    post: "Web Team Committee Co-ordinator", 
    linkedin: web_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901450/manikanta_swvndr.jpg` 
  },
  { 
    name: "Manya Chandra", 
    about: "Weaving words into impact — curating content that speaks volumes, connects deeply, and brings every idea to life with purpose and clarity.", 
    post: "Content Team Committee Co-Coordinator", 
    linkedin: content_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901451/manya_chandra_hz1nlt.jpg` 
  },
  { 
    name: "Aarsi Kumari", 
    about: "Every frame captures emotion, and every post amplifies a message. As Media Team Coordinator, I shape narratives through visuals, lead with intent, and ensure our media speaks louder than words. It’s about more than creating—it’s about connecting and making an impact..", 
    post: "Media Team Committee Co-ordinator", 
    linkedin: media_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901444/aarsi_kumari_b0bc0i.jpg` 
  },
  { 
    name: "Anusha Tank", 
    about: "Calm yet vibrant, Anusha brings balance and quiet confidence to every task. She tackles challenges with logic, patience, and poise—uplifting her team with focus, reliability, and positive energy. anusha doesn’t just coordinate, she elevates", 
    post: "Technical Team Committee Co-ordinator", 
    linkedin: technical_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901447/anusha_tank_dhibly.jpg` 
  },
  { 
    name: "Vaibhav Shankwar", 
    about: "Amplifying voices and shaping perception — managing communication with clarity, creativity, and intent to build lasting connections and a strong public presence.", 
    post: "PR Team Committee Co-ordinator", 
    linkedin: pr_coordinator_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901457/vaibhav_shankwar_shoxya.jpg` 
  }
];

//leads
const lead = [
  { 
    name: "Shreyansh Singh", 
    about: "Leading with passion and precision, transforming ideas into unforgettable events that run flawlessly and leave a lasting impact on everyone involved.", 
    post: "Event Team Lead", 
    linkedin: event_lead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901453/shreyansh_singh_q2gdn3.jpg` 
  }
];

//co-leads
const coLead = [
  { 
    name: "Sonu Kumar", 
    about: "Leading with vision, dedication, and unwavering focus — steering the team through every challenge to achieve excellence with unity and purpose.", 
    post: "Core Team Lead", 
    linkedin: core_lead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901455/sonu_kumar_zopuvs.jpg` 
  },
  { 
    name: "Sakshi Kumari", 
    about: "With calm precision and boundless dedication, turning chaos into celebration and crafting experiences that linger long after the applause fades.", 
    post: "Event Team Co-Lead", 
    linkedin: event_colead_1_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901452/sakshi_kumari_l8vn04.jpg` 
  },
  { 
    name: "Abhishek Keshri", 
    about: "Merging logic with creativity, building digital foundations that are as reliable as they are innovative — turning code into seamless user experiences.", 
    post: "Web Team Co-Lead", 
    linkedin: web_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901445/abhishek_keshri_yuimey.jpg` 
  },
  { 
    name: "Udipta Katyayana", 
    about: "Bringing energy and vision to every event, turning ideas into unforgettable moments that echo beyond the final spotlight.", 
    post: "Event Team Co-Lead", 
    linkedin: event_colead_2_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901456/udipta_katyayana_qfno31.jpg` 
  },
  { 
    name: "Prakhar Srivastava", 
    about: "Creativity meets leadership — shaping ideas into stunning visuals that inspire and elevate every project to a new level of excellence.", 
    post: "Design Team Co-Lead", 
    linkedin: design_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901451/prakhar_srivastava_m4vlgq.jpg` 
  },
  { 
    name: "Anand Kumar", 
    about: "Capturing moments with passion and precision, transforming stories into powerful visuals that connect, inspire, and amplify every event’s impact.", 
    post: "Media Team Co-Lead", 
    linkedin: media_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901445/anand_kumar_uzxrap.jpg` 
  },
  { 
    name: "Aniket Kumar", 
    about: "Turning visions into seamless events with dedication and sharp coordination, creating memorable experiences that leave a lasting impression on everyone involved.", 
    post: "Technical Team Co-Lead", 
    linkedin: technical_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901446/aniket_kumar_wonbql.jpg` 
  },
  { 
    name: "Ashish Kumar", 
    about: "Steadfast and visionary, leading with purpose and resilience — driving the team forward through challenges toward shared goals and lasting achievements.", 
    post: "Core Team Co-Lead", 
    linkedin: core_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901448/ashish_kumar_sqofmm.jpg` 
  },
  { 
    name: "Sneha Kumari", 
    about: "Connecting voices and stories with clarity and charm, building bridges that amplify every message and strengthen the team’s presence far and wide.", 
    post: "PR Team Co-Lead", 
    linkedin: pr_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901444/sneha_kumari_cmx1ok.jpg` 
  },
  { 
    name: "Ayushi Singh", 
    about: "Every word has weight—some inform, others ignite. As Content Team Co-Lead, I blend emotion with strategy to craft content that resonates deeply and drives meaning. It’s not just about writing—it’s about shaping how people feel, think, and act..", 
    post: "Content Team Co-Lead", 
    linkedin: content_colead_linkedin, 
    image: `${CLOUDINARY_BASE_URL}/v1782901449/ayushi_singh_vvsawo.jpg` 
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
          <h1>Student Coordinators IC</h1>
        </div>
      </div>
      <div className="main">
        {studentCoordinator.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
        <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Student Co-coordinators IC</h1>
        </div>
      </div>
      <div className="main">
        {studentCocoordinator.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Secretary IC</h1>
        </div>
      </div>
      <div className="main">
        {secretary.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Committee Co-ordinators IC</h1>
        </div>
      </div>
      <div className="main">
        {committeeCoordinator.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Leads IC</h1>
        </div>
      </div>
      <div className="main">
        {lead.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      <div className="container_header2"
      style={{marginTop: "45px"}}>
        <div>
          <h1>Co-Leads IC</h1>
        </div>
      </div>
      <div className="main">
        {coLead.map((info, index)=>(
            <Card key={index} name={info.name} post={info.post} role={info.about} image={info.image} linkedin={info.linkedin}/>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}
