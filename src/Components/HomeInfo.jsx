import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box" style={{ boxShadow: 'none' }}>
    <p className="font-medium text-center">{text}</p>

    <Link
      to={link}
      className="neo-brutalism-white neo-btn"
      style={{ boxShadow: 'none' }}
    >
      {btnText}
      <img
        src={arrow}
        alt="arrow"
        className="w-4 h-4 object-contain"
      />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1
      className="text-center neo-brutalism-blue py-4 px-8 text-white mx-5"
      style={{ boxShadow: 'none' }}
    >
      Hi, I am <span className="font-semibold">Azhar Khan</span> 👋
      <br />
      A Data Scientist from India.
    </h1>
  ),

  2: (
    <InfoBox
      text="From internships to independent projects — learning by doing."
      link="/about"        // ✅ fixed
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="Turning raw data into meaningful insights — one project at a time."
      link="/projects"     // ✅ fixed
      btnText="Visit my portfolio"
    />
  ),

  4: (
    <InfoBox
      text="Have a data problem or idea? I'm just a few keystrokes away."
      link="/contact"      // ✅ fixed
      btnText="Let's talk"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
