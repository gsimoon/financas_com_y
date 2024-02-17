import React, { forwardRef } from "react";

const Products = forwardRef(({ scrollTo }, ref) => {

  const handleClick = (item) => {
    scrollTo(item);
  };

  return (
    <div className="main-products" ref={ref}>
      <div className="products-description">
        <div className="description-content">
          <h1>A vida não é só boletos.</h1>
          <h3>E aqui você descobre como tornar isso real!</h3>
          <div className="description-btn">
            <button onClick={() => handleClick(`freeContent`)}>CONHECA OS COTEUDOS GRATUITOS</button>
          </div>
        </div>
      </div>
      <div className="products-content">
        <div className="content-title">
          MEUS SERVICOS
        </div>
        <div className="content-list">
          <ul>
            <li onClick={() => handleClick(`courses`)}>Cursos</li>
            <li onClick={() => handleClick(`consultancies`)}>Consultorias Especificas</li>
            <li onClick={() => handleClick(`mentoring`)}>Mentorias Financeiras</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Products;