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
    name: `Consultoria para Precificação`,
    description: `Essa consultoria é voltada para precificar de forma correta seus produtos e/ou serviços. Nela teremos 2 encontros e suporte via whatsapp, além de mais 5 revisões adicionais inclusas.`,
    img: require(`../images/cons_orcamento.png`),
    link: `https://docs.google.com/forms/d/e/1FAIpQLSdZfrS3v7p3TCIElbwPK5Z5n70C_RC6zyqxm-dImcDZX-xZxQ/viewform`
  },
  {
    id: 2,
    name: `Quero quitar minhas  dívidas`,
    description: `A consultoria financeira é focada no processo de quitação das suas dívidas. Com 3 sessões durante o período de 2 meses irei mapear e criar um plano de pagamento de dívidas.`,
    img: require(`../images/cons_financeira.png`),
    link: `https://api.whatsapp.com/send/?phone=5532984631371&text=&type=phone_number&app_absent=0`
  },
  {
    id: 3,
    name: `Consultoria Financeira - Cartão de Crédito Inteligente`,
    description: `Voltada para quem quer ter benefícios usando o cartão de crédito. Nessa consultoria vamos falar sobre Milhas, Pontos, Cashback, etc.`,
    img: require(`../images/cons_cartao_credito.png`),
    link: `https://docs.google.com/forms/d/e/1FAIpQLSdTlnIRfoXrlk1S6syu4j7zOvbdhrQ8hqPEcHTXWb1nXtvuSA/viewform`
  }
]

const Consultancies = forwardRef((props, ref) => {
  return (
    <div className="main-consultancies" ref={ref}>
      <div className="consultancies-title">CONSULTORIAS FINANCEIRAS</div>
      <div className="consultancies-content">
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

export default Consultancies;