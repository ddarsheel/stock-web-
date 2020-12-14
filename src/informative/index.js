import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import Logo from '../logo';
class Slides extends Component {
    render() {
        return(
            <div className="INFORMATIVE-QUESTION">
                <Carousel>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/image/slide1.jpeg"} 
                        alt="logo" height="400px" width="100%"/>
                        <h2 className="legend">AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST </h2>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/image/slide2.jpeg" }
                         alt="logo" height="400px" width="100%"/>
                        <p className="legend">EMPOWER YOUR FINANCIAL</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/image/slide3.jpeg"}
                        alt="logo" height="400px" width="100%"/>
                        <p className="legend">WE HELP GROWING BUSINESS</p>
                    </div>
                </Carousel>
                    <Logo/>
            </div>

        );
    }
}
export default Slides;