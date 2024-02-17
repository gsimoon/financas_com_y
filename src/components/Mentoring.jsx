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
    name: `Organização e Planejamento`,
    description: `Para quem gasta tudo ou mais do que ganha, essa mentoria de 3 meses vai te fazer sair dessa situação e finalmente conquistar seus objetivos.`,
    img: require(`../images/ment_organizacao.png`),
    link: `https://docs.google.com/forms/d/e/1FAIpQLSfWM_cFyyMA4m7VPmSkfKMeTrZ1HrDfUWch0mWGX2rAozeXvQ/viewform`
  },
  {
    id: 2,
    name: `Endividados`,
    description: `Nessa mentoria, vou montar seu plano de pagamento de dívidas e durante os 3 meses vamos coloca-lo em prática. Essa também é para quem tentou sozinha, mas não conseguiu.`,
    img: require(`../images/ment_endividados.png`),
    link: `https://docs.google.com/forms/d/e/1FAIpQLSekvkMFf4_i01_LDdnyDU1Ry4iYWYMAdP-UgZrSjLG2sxqE0g/viewform`
  },
  {
    id: 3,
    name: `Casal`,
    description: `A mentoria vai durar 3 meses e vamos trabalhar as finanças do casal, tanto o presente quanto para o futuro. Ela é voltado para casais que moram na mesma casa ou farão futuramente.`,
    img: require(`../images/ment_casal.png`),
    link: `https://docs.google.com/forms/d/e/1FAIpQLSfF-momaHfkYihP8KRgmwjxyA7SpkiLjxmwRsKyDkrZTocXjQ/viewform`
  }
]

const Mentoring = forwardRef((props, ref) => {
  return (
    <div className="main-mentoring" ref={ref}>
      <div className="mentoring-title">MENTORIAS FINANCEIRAS</div>
      <div className="mentoring-content">
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

export default Mentoring;