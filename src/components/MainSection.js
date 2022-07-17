import React from 'react';
import {Button} from './Button';
import './MainSection.css';
import '../App.css';





function MainSection() {
 return (
    <div className='hero-image'>
        <video  className="video-container" src='./videos/video1.mp4' autoPlay='autoplay' loop ='loop' muted='muted' />
        <h1>CAKES & BREADS</h1>
        <p>Freshly baked with love!</p>
        <div className='hero-btns' style={{ justifyContent: "space-between" }}>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' >
                GET YOURS
            </Button>
            
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                ABOUT US <i className="fa-regular fa-circle-play"></i>            
            </Button>
        </div>
    </div>
  )
}

export default MainSection;
