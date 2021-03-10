import React from "react";
import newApi from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setDescription] = React.useState('');
  const [userAvatar, setAvatar] = React.useState('');

  React.useEffect(() => {
    newApi.getProfileInfo()
      .then((data) => {
        setUserName(data.name);
        setDescription(data.about);
        setAvatar(data.avatar);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, [])

  const [cards, setCards] = React.useState([]);

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
          <img src={userAvatar} alt="аватар пользователя" className="profile__avatar"/>
          <button className="profile__avatar-edit"
                  onClick={props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button"
                  onClick={props.onEditProfile}>
          </button>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button"
                onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="elements root__elements">
        {
          cards.map((card, i) => (
            <Card handleCardClick={props.onCardClick}
                  card={card}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
