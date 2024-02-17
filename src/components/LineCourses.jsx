import React from "react";

const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
};

const LineCourses = () => {
    return (
        <div className="main-linecourses">
            <button onClick={() => openInNewTab(`https://form.respondi.app/Q1njW5Af`)}>AGENDA ABERTA: Mentoria Financeira 2024</button>
            <button onClick={() => openInNewTab(`https://hotmart.com/pt-br/marketplace/produtos/plannerfinanceiro_financascomy/L90032474Y`)}>Compre seu Planner Financeiro</button>
        </div>
    );
};

export default LineCourses;