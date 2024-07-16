import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import different images
import img1 from "../../public/img/cat-5183427_640.jpg";
import img2 from "../../public/img/cat-5646889_640.jpg";
import img3 from "../../public/img/i7ap4hil.png";
import img4 from "../../public/img/little-egret-5826070_640.jpg";
import img5 from "../../public/img/man-1281562_640.jpg";
import img6 from "../../public/img/portrait-657116_640.jpg";
import img7 from "../../public/img/portrait-657116_640.jpg";
import img8 from "../../public/img/little-egret-5826070_640.jpg";
import img9 from "../../public/img/little-egret-5826070_640.jpg";
import img10 from "../../public/img/woman-590490_640.jpg";
import img11 from "../../public/img/little-egret-5826070_640.jpg";
import img12 from "../../public/img/little-egret-5826070_640.jpg";
import img13 from "../../public/img/portrait-4599553_640.jpg";
import img14 from "../../public/img/woman-590490_640.jpg";

// Stories data with the imported images
export const stories = [
    { title: "JavaScript", image: img1 },
    { title: "Node.js", image: img2 },
    { title: "Express.js", image: img3 },
    { title: "MongoDB", image: img4 },
    { title: "React.js", image: img5 },
    { title: "Socket.io", image: img6 },
    { title: "TailwindCSS", image: img7 },
    { title: "Heroku", image: img8 },
    { title: "MaterialUI", image: img9 },
    { title: "Redux", image: img10 },
    { title: "Multer", image: img11 },
    { title: "Sendgrid", image: img12 },
    { title: "Axios", image: img13 },
    { title: "Toastify", image: img14 },
];

const StoriesContainer = () => {
    const [readStories, setReadStories] = useState({});
    const [currentStory, setCurrentStory] = useState(null);

    const handleStoryClick = (index) => {
        setReadStories((prevState) => ({ ...prevState, [index]: true }));
        setCurrentStory(stories[index].image);
    };

    const handleCloseStory = () => {
        setCurrentStory(null);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7.5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div>
            {currentStory ? (
                <div className="relative w-full h-64 flex justify-center items-center mb-4">
                    <img
                        className="h-full object-contain"
                        src={currentStory}
                    />
                    <button
                        onClick={handleCloseStory}
                        className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded"
                    >
                        Close
                    </button>
                </div>
            ) : (
                <Slider {...settings} className="w-full bg-white pt-2.5 pb-1 px-2.5 flex overflow-hidden border rounded">
                    {stories.map((s, i) => (
                        <div
                            className="flex flex-col text-center justify-center items-center p-2 cursor-pointer"
                            key={i}
                            onClick={() => handleStoryClick(i)}
                        >
                            <div
                                className={`w-16 p-[1px] h-16 rounded-full border-4 ${
                                    readStories[i] ? "border-gray-300" : "border-red-500"
                                }`}
                            >
                                <img
                                    loading="lazy"
                                    className="rounded-full h-full w-full border border-gray-300 object-cover"
                                    src={s.image}
                                    draggable="false"
                                    alt={s.title}
                                />
                            </div>
                            <span className="text-xs">{s.title}</span>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default StoriesContainer;
