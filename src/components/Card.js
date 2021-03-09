import React from "react";
import newApi from "../utils/api";

function Card(props) {
  const [cards, loadCards] = React.useState([]);

  React.useEffect(() => {
    newApi.getInitialCards()
      .then((data) => {
        loadCards(data)
      })
  }, [])


  return (
    (
      <section className="elements root__elements">
      {
        cards.map((card, i) => (
          <div key={card._id} className="elements__item">
            <img src={card.link} className="elements__image" alt="место в России"/>
            <button type="button" className="elements__button-delite elements__button-delite_hidden">
            </button>
            <div className="elements__name">
              <h2 className="elements__title">{card.name}</h2>
              <div className="elements__group">
                <button type="button" className="elements__button-like">
                </button>
                <p className="elements__counter">{card.likes.length}</p>
              </div>
            </div>
          </div>
        ))
      }
      </section>
    )
  )
}

export default Card
