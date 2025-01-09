import './App.css'
import React, { useState } from 'react';
import{ Row, Col,Card }from'antd';
import { Button } from 'antd';
import travel from './smiley-woman-posing-her-baggage.png'
import Antena from './antena.png'
import Aero from './areoplane.jpg'
import Mike from './mike.jpg'
import Setting from './setting.png'
import Rome from './rome.jpg'
import Erope from './urope.jpg'
import Uk from './uk.jpg'
import Destination from './destination.png'
import Payment from './payment.png'
import Car from './car.jpg'
import Cars from './card.png'
import { FacebookFilled, InstagramFilled , TwitterCircleFilled   } from '@ant-design/icons';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
   <nav className="navbar">
            <div className="logo">Jad<span>oo</span> </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Destinations</a>
                <a href="#about">Hotels</a>
                <a href="#services">Flights</a>
                <a href="#portfolio">Bookings</a>
                <a href="#blog">Login</a>
                
                <button className="signup-button">Sign Up</button>
                <div className="dropdown">
                    <button className="dropbtn">Eng</button>
                    <div className="dropdown-content">
                        <a href="#">English</a>
                        <a href="#">Urdu</a>
                    </div>
                </div>
            </div>
            <button className="toggler" onClick={toggleMenu}>
                ☰
            </button>
        </nav> <div><Row>
      <Col id='half'    // On mobile, take full width
            span={12}><b>Best Destination Around The World</b> <br />
      <h1>Travel,enjoy <br />and live a new <br />and full life</h1>
      <p>built wicket longer admire a batren vanity its self do in it. <br />preffered  to spotmen it  engrosseed  listening .  
      <br />sell they west hard for the.</p> <br />
      <Button id='find' type="">Find out more</Button>     <Button type="">Play demo</Button>
      
      </Col>
      <Col id='full' span={12}><img id='travel' src={travel} alt=""/></Col>
    </Row></div>

<div><div className='service'><p>CATEGORY</p>
<h2>We Offer Best Service</h2></div> <br />
<Row id='inline' gutter={16}>
    <Col span={6}>
      <Card >
        <h6>Calculated weather</h6>
        <p>Are you looking for a specific type of weather  data (temperature, humidity, precipitation)?</p>
       <img src={Antena} alt="" />
      </Card>
    </Col>
    <Col span={6}>
      <Card >
      <h6>Best flight</h6><p>Are you looking for travel information, flights, or something else?</p>
   <img src={Aero} alt="" />
      </Card>
    </Col>
    <Col span={6}>
      <Card >
      <h6>Local events</h6>
      <p>Is it related to something specific, like aviation, music (microphones), or another topic?</p>
       <img src={Mike} alt="" />
      </Card>
    </Col>
    <Col span={6}>
      <Card >
      <h6>Costumization</h6>
      <p>Customizing cars, bikes, or airplanes (e.g., paint jobs, interiors).</p>
    <img src={Setting} alt="" />
      </Card>
    </Col>
  </Row></div>
<br /><br />
  <div className='service'>
<Row id='inline' gutter={16}>
    <Col span={8}>
      <Card >
       <img src={Rome} alt="" className='img' />
       <p className='p' >Rome ,Italy    <b>5.2$</b></p>
       <h6 > // 10 day trip</h6>
      </Card>
    </Col>
    <Col span={8}>
      <Card >
      <img src={Uk} alt="" className='img' />
      <p className='p' >London,uk  <b>4.2$</b></p>
      <h6>/ / 12 day trip</h6>
      </Card>
    </Col>
    <Col span={8}>
      <Card ><img src={Erope} alt="" className='img' />
      <p className='p' >Full Europe   <b>15.2$</b></p>
      <h6> // 15 day trip</h6>
      </Card>
    </Col>
    </Row>
</div> <br />
<div><Row>
      <Col span={16}><div className='easy'>
      <p>Easy and Fast</p>
      <h1>Book your Next Trip <br />In Three Steps</h1><h6><img src={Destination} alt=""/>Best Destination   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus.</p></h6>
      
      <h6><img src={Payment} alt=""/>Best Destination  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus</p></h6>
      <h6><img src={Car} alt=""/>Best Destination <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus</p></h6>
      </div>
      </Col>
      <Col span={8}><div className='card'><img src={Cars} alt="" /></div></Col>
    </Row>
</div>
<div className='last'>
    
     <br /><h2> Subscribe  to get information,latest news and other <br />inetresiting about jadoo.
    </h2>
    <input type="text" placeholder=' Your Email' id='input'/>    <Button type="" id='btn'>Subscribe
    
    </Button>
     </div>
     <Row justify="space-between">
      <Col span={4}><h2>Jad<span>oo</span></h2></Col>
      <Col span={4}><h6>Company</h6><p className='a'><br />About <br />Career <br />Mobile</p></Col>
      <Col span={4}><h6>Contact</h6><p className='a'> <br />Help FAQ? <br />Services <br />Affilate</p> </Col>
      <Col span={4}> <br /><FacebookFilled /> <InstagramFilled /> <TwitterCircleFilled /><p className='a'>Discover Our App <br />Thankyou!</p> <br /></Col>
    </Row>
    </>
  )
}

export default App
