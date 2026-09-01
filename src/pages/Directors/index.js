import React from 'react';
import { director_linkedin, nitp_main } from '../../constants/const';
import "./style.css";
import { CLOUDINARY_BASE_URL } from "../../constants/const";

const Director = () => {
	return (
		<section className="dark" id='darki'>
			<div className="container py-4">
				<h1 className="h1 text-center" id="pageHeaderTitle" data-aos="fade-down">Director <span style={{ color: "#0ef" }}>Desk</span></h1>

				<article className="postcard dark blue">
					<div className="postcard__img_link">
						<img className="postcard__img" src={`${CLOUDINARY_BASE_URL}/v1782901704/director_yasexw.jpg`} alt="Director NIT Patna" />
					</div>
					<div className="postcard__text">
						<h1 className="postcard__title blue"><span style={{ color: "#0ef" }}>Director, NIT Patna</span></h1>
						{/* <div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div> */}
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt">Prof. Pradip K. Jain, Director of NIT Patna, renowned for high-power microwave research, with extensive contributions, publications, and international collaborations in his career.He has made significant contribution in the areas of analysis, modeling and development of high power microwave tubes and gyrotron devices.He has so far guided 20 doctoral theses, published more than 100 research papers in SCI journals and 200 in the conference proceedings beside a patent and authoring six book/monograph chapters. Dr. Jain is a senior member of IEEE, fellow of Institution of Electronics and Telecommunications Engineers of India, Fellow of Institution of Engineers of India and also a fellow of Vacuum Electron Devices and Application Society.</div>
						<ul className="postcard__tagbox">
							{/* <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li className="tag__item play blue">
								<a href={`${nitp_main}/Institute/Director`}><i className="fas fa-play mr-2"></i>Know More</a>
							</li>
						</ul>
					</div>
				</article>
				<article className="postcard dark blue">
					<div className="postcard__img_link">
						<img className="postcard__img" src={`${CLOUDINARY_BASE_URL}/v1782901328/prof_bharat_gupta_ubqzlo.jpg`} alt="Prof. Bharat Gupta" />
					</div>
					<div className="postcard__text">
						<h1 className="postcard__title blue"><span>Professor in Charge
							INCUBATION CENTER</span></h1>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt">Dr. Bharat Gupta leads the Electronics and Communication Department, spearheading research and educational initiatives in cutting-edge technologies and applications.</div>
						<ul className="postcard__tagbox">
							{/* <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
							<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li className="tag__item play blue">
								<a href={director_linkedin}><i className="fas fa-play mr-2"></i>Know More</a>
							</li>
						</ul>
					</div>
				</article>

			</div>
		</section>

	)
}

export default Director;