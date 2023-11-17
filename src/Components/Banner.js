import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image5 from './Images/image5.jpg';
import image6 from './Images/image6.jpg';
import image4 from './Images/image4.jpg';
import duster from './Images/duster1.png';
import board from './Images/board7.jpg';




export default function Banner() {
    const images = [board];

    const sentences = [
        "Hi, I'm Komal Badgujar.",
        "I'm Professor of Mathematics",
        "I Love To Teach Maths and Solve Problems"
    ];

    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [displayedSentence, setDisplayedSentence] = useState("");
    const [goingSenstence, setGoingSentence] = useState("");
    const [animationClass, setAnimationClass] = useState('initial');

    const CustomArrow = ({ direction, onClick }) => (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? '◀' : '▶'}
        </div>
    );


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,

    };


    useEffect(() => {
        const typingInterval = setInterval(() => {
            const currentSentence = sentences[currentSentenceIndex];
            const slicedSentence = currentSentence.slice(0, displayedSentence.length + 1);

            setDisplayedSentence(slicedSentence);

            if (slicedSentence === currentSentence) {
                clearInterval(typingInterval);

                // Move to the next sentence after a delay (e.g., 2000 milliseconds)
                setTimeout(() => {
                    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                    setDisplayedSentence("");

                    setTimeout(() => {
                        setGoingSentence('anime-out')
                    }, 10000)
                }, 27500);
            }
        }, 100); // Adjust typing speed (milliseconds) as needed

        return () => clearInterval(typingInterval);
    }, [currentSentenceIndex, displayedSentence]);



    useEffect(() => {
        performAnimation();
       
        return () => {
            clearTimeout();
           
        };
    }, []);


    const performAnimation = () => {
        // After 30 seconds, move to top left
        // const timeout1 =
        setTimeout(() => {
            setAnimationClass('move-to-top-left');


            // After moving to top left, start horizontal movement
            // const timeout2 =
            setTimeout(() => {
                setAnimationClass('move-horizontally');


                // After horizontal movement, return to initial position
                // const timeout3 =
                setTimeout(() => {
                    setAnimationClass('return-to-initial');

                    setTimeout(performAnimation, 100);
                    // Clear timeouts on component unmount
                }, 10000); // Changed from 40000 to 60000
            }, 10000); // Changed from 50000 to 90000
        }, 10000); // Changed from 3000 to 30000
    }




    return (
        <div className='banner-card'>

            {/* <div className=""> */}
            <img
                className={`duster ${animationClass}`}
                src={duster}
                alt='Duster'
            />
            {/* </div> */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='banner-img' src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
            <div className="typing-container">
                <p className="typing-sentence">{displayedSentence}</p>
            </div>
        </div>
    );
}
