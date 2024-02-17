import React from "react";
import Icons from "../icons/Icons";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer")
};

const Footer = () => {

  return (
    <div className="main-footer">
      <div onClick={() => openInNewTab(`https://www.instagram.com/financascomy`)}><Icons icon={`instagram`}/></div>
      <div onClick={() => openInNewTab(`https://www.facebook.com/financascomy`)}><Icons icon={`facebook`}/></div>
      <div onClick={() => openInNewTab(`https://www.linkedin.com/posts/talyta-nascimento-b227bb1ba_disponaedvelparanegaejcios-activity-7104466078575046658-sIkO/?utm_source=share&utm_medium=member_desktop`)}><Icons icon={`linkedin`}/></div>
      <div onClick={() => openInNewTab(`https://api.whatsapp.com/send/?phone=5532984631371&text=&type=phone_number&app_absent=0`)}><Icons icon={`whatsapp`}/></div>
      <div onClick={() => openInNewTab(`mailto:talytafelipenascimento@gmail.com`)}><Icons icon={`email`}/></div>
    </div>
  )
}

export default Footer;