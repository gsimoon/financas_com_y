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
    name: `Organize seu orçamento`,
    description: `Para quem quer saber para onde está indo seu dinheiro, esse curso é o ideal. Aqui você vai aprender por onde e como começar.`,
    img: require(`../images/curso_orcamento.png`),
    link: `https://hotmart.com/pt-br/marketplace/produtos/organize-seu-orcamento/E74605525P`
  },
  {
    id: 2,
    name: `Reserva de Emergência`,
    description: `Imprevistos financeiros acontecem, mas precisamos estar preparados. Nesse curso vou te ensinar a forma correta de se preparar!`,
    img: require(`../images/curso_reserva_emergencia.png`),
    link: `https://hotmart.com/pt-br/marketplace/produtos/minha-reserva-de-emergencia/D71095294G`
  },
  {
    id: 3,
    name: `Cartão de Crédito`,
    description: `O cartão não pode ser o vilão do seu orçamento, ele precisa ser seu aliado. Então aprenda isso nesse curso e mude essa realidade.`,
    img: require(`../images/curso_cartao_credito.png`),
    link: `https://hotmart.com/pt-br/marketplace/produtos/voce-no-controle-do-seu-cartao/K77279724C`
  },
  {
    id: 4,
    name: `Curso Express - Online`,
    description: `Nesse curso, iremos fazer atividades diárias com 30 minutos de duração através do Whatsapp com foco em Organizar sua vida financeira.`,
    img: require(`../images/curso_express_online.png`),
    link: `https://api.whatsapp.com/send/?phone=5532984631371&text=&type=phone_number&app_absent=0`
  }
]

const Courses = forwardRef((props, ref) => {
  return (
    <div className="main-courses" ref={ref}>
      <div className="courses-title">CURSOS</div>
      <div className="courses-content">
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

export default Courses;