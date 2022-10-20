import "antd/dist/antd.css";
import { Carousel } from "antd";
import './Slider.scss';


function Slider() {
    return (
        <div style={{ width: '960px', height: '328px' }} className="Slider">
            <Carousel autoplay dots={true} draggable effect="fade">
                <div className="Slide1">
                    <h1 style={{ color: "transparent", lineHeight: "328px" }}>
                        <a>1</a>
                    </h1>
                </div>
                <div className="Slide2">
                    <h1 style={{ color: "transparent", lineHeight: "328px" }}>
                        <a>2</a>
                    </h1>
                </div>
                <div className="Slide3">
                    <h1 style={{ color: "transparent", lineHeight: "328px" }}>
                        <a>3</a>
                    </h1>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;