import React, { forwardRef } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const data = [
  {
    id: 1,
    name: `Palestras, Lives e Parcerias`,
    description: `Clique na foto para ser direcionado ao contato principal.`,
    img: require(`../images/free_content.jpg`),
    link: `https://api.whatsapp.com/send/?phone=5532984631371&text=&type=phone_number&app_absent=0`
  },
  {
    id: 2,
    name: `Comunidade Gratuita`,
    description: `Receba conteúdos exclusivos de forma gratuita.`,
    img: require(`../images/free_group.png`),
    link: `https://chat.whatsapp.com/HB0qntGSLEMJvduJAEVk1Y`
  },
  {
    id: 3,
    name: `Aula Gratuita`,
    description: `Nessa aula vou ensinar como utilizar a planilha financeira para te ajudar no seu orçamento mensal.`,
    img: require(`../images/free_class.png`),
    link: `https://app.nutror.com/v3/curso/3e9adf44c91877cfe22e17bf9cdb7806c44ae3e4`
  }
]

const Free_Content = forwardRef((props, ref) => {
  return (
    <div className="main-free" ref={ref}>
      <div className="free-title">CONTEUDOS GRATUITOS</div>
      <div className="free-content">
        <Swiper
          spaceBetween={50}
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          effect={'coverflow'}
          breakpoints={{800: {slidesPerView: 2}, 1000: {slidesPerView: 3}}}
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <div className="content-item">
                <div className="item-card">
                  <div className="card-title">{item.name}</div>
                  <div className="card-image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="card-description">
                    <p>{item.description}</p>
                  </div>
                  <div className="card-button">
                    <button onClick={() => openInNewTab(item.link)}>Saiba Mais</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});

export default Free_Content;