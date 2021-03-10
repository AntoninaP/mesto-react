import React from "react";

function Card(props) {


  function handleClick() {
    props.handleCardClick(props.card);
  }

  return (
    (
      <div className="elements__item">
        <img src={props.card.link} className="elements__image" alt="место в России" onClick={handleClick}/>
        <button type="button" className="elements__button-delite elements__button-delite_hidden">
        </button>
        <div className="elements__name">
          <h2 className="elements__title">{props.card.name}</h2>
          <div className="elements__group">
            <button type="button" className="elements__button-like">
            </button>
            <p className="elements__counter">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    )
  )
}

export default Card
