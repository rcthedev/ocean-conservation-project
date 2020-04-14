import React from "react";
//import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./../index.css";
import "./login"


function Main(){
      return (
        <div>
          <br />
          <div className="intro">
            <h1 className="intro__title">About Us:</h1>
            <p className="intro__body">It is our vision to bring Awareness to the ongoing problems that are affecting our oceans.
              From The
              overfishing of our ocean’s lake and rivers. To the excessive amounts of trash that is being dumped into our
              oceans and how it is affecting ocean ecology and wildlife to toxic algae blooms.
              <br />
              <br />
              Through sharing of information and discussion we hope to bring more awareness to these issues and help find
              common sense resolutions to these issues.
              Join us on this journey of conservation and awareness</p>

              
          </div>
          <div className="splash">
            <h3 className="splash__title">Overfishing:</h3>
            <p className="splash__body">For many years we have taken advantage of the abundance that has been afforded to us from our ocean’s lakes and
              rivers that lately we have been seeing the effects of what overfishing is having on our ecosystems and
              biodiversity.
              Without Proper fish management we can only make the problem worse.
              <a href="%PUBLIC_URL%/overfishing.html"> Would you like to know more?</a></p>
            <br />
            <h3 className="splash__title">Ocean Pollution:</h3>
            <p className="splash__body">For many years we as humans have intentionally and unintentionally polluted our oceans with plastic and
              non-biodegradable items. This has caused severe damage and harm to our largest ecosystem on the planet including
              destroying habitats,
              ocean wildlife migration patterns. As well as the death vital ecosystems. <a href="%PUBLIC_URL%/pollution.html">Would you like to know
                more?</a></p>
            <br />
            <h3 className="splash__title">Red Algae/Red Tide:</h3>
            <p className="splash__body">While there are many health benefits to using red algae. And most algae blooms can be beneficial to ocean life as
              they provide food for ocean wildlife. There is a Small Portion of these algae blooms (also known as the red tide)
              that can produce toxins that can kill all plant and fish life within its vicinity.
              <a href="%PUBLIC_URL%/redtide.html"> Would you like to know more?</a></p>
          </div>
        </div>
        
          );
  }


export default Main;
