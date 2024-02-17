import React from "react";
import imgBG from "../images/backgroungHome.png"

const Home = () => {
    return (
        <div className="main-home">
            <div className="home-image">
                <img src={imgBG} alt="" />
            </div>
            <div className="home-text">
                <div className="text-title">FINANÇAS COM Y</div>
                <div className="text-content">
                    Bem-vindo ao FINANÇAS COM Y, onde transformamos sonhos em realidade através da educação financeira, consultoria especializada e mentoria personalizada. Descubra o caminho para uma vida financeira mais saudável e realize seus objetivos conosco.
                </div>
            </div>
        </div>
    );
};

export default Home;