import React from "react";
import imgAbout from "../images/about_me.jpg";

const About = () => {
    return (
        <div className="main-about">
            <div className="about-data">
                <div className="data-title">SOBRE MIM</div>
                <div className="data-image">
                    <img src={imgAbout} alt="" />
                </div>
            </div>
            <div className="about-description">
                <p>Sou a Talyta Nascimento, Economista e Pós-graduanda em Planejamento Financeira. Mas a minha trajetória com educação financeira começou bem antes disso.</p>
                <p>Desde criança, minha mãe me ensinou como cuidar do meu dinheiro. A primeira imagem que tenho é dela com um papel na mão planejando o salário do mês.</p>
                <p>Durante 5 anos, na época com 15 anos de idade, cuidei sozinha das finanças da Escola Dominical e Meu 1º curso na área foi em 2014 com o tema "Matemática Financeira: Como evitar o endividamento das famílias".</p>
                <p>Em 2018, em um Simpósio Multidisciplinar, ensinei mais de 30 jovens sobre a Importância de cuidar do seu dinheiro desde o ínicio.</p>
                <p>Ao longo do tempo, entendi que cuidar do dinheiro vai muito além de números, tem haver com as coisas que AMAMOS e queremos REALIZAR! Afinal, a vida não é só pagar boleto!</p>    
            </div>
        </div>
    );
};

export default About;