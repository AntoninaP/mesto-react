import React from "react";

function ImagePopup() {
  return (
    (
      <div className="popup popup_dark popup-preview">
        <div className="popup__container-preview">
          <button type="button" className="popup__close-button"></button>
          <img src="<%=require('./images/kamchatka.jpg')%>" alt="изображение достопримечательности в России"
               className="popup__image"/>
          <p className="popup__preview-title">изображение достопримечательности в России</p>
        </div>
      </div>
    )
  );
}

export default ImagePopup;
