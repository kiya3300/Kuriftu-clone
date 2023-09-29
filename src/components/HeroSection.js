import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1_kuriftu.mp4' autoPlay loop muted />
      <h1>Kuriftu Water Park</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
