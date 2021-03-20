import React from "react";
import newApi from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    newApi.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  React.useEffect(() => {
    newApi.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt="аватар пользователя" className="profile__avatar"/>
          <button className="profile__avatar-edit"
                  onClick={props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button"
                  onClick={props.onEditProfile}>
          </button>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button"
                onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="elements root__elements">
        {
          cards.map((card, i) => (
            <Card key={card._id} handleCardClick={props.onCardClick}
                  onCardLike={handleCardLike}
                  card={card}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
