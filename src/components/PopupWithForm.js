import React from "react";

function PopupWithForm(props) {
  return (
    (
      <div className={`popup popup-${props.name}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button">
          </button>
          <form name={`${props.name}`} className="popup__form" noValidate>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
          </form>
        </div>
      </div>
    )
  );
}

export default PopupWithForm;
