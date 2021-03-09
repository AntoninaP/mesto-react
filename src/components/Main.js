import React from "react";
import Avatar from "../images/avatar.jpg"

function Main(props) {


  return (
    (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={Avatar} alt="аватар пользователя" className="profile__avatar"/>
            <button className="profile__avatar-edit"
                    onClick={props.onEditAvatar}>
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button"
                    onClick={props.onEditProfile}>
            </button>
            <p className="profile__profession">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button"
                  onClick={props.onAddPlace}>
          </button>
        </section>
        <section className="elements root__elements">
          <template className="template template_type_default">
            <div className="elements__item">
              <img src="<%=require('./images/kamchatka.jpg')%>" className="elements__image" alt="место в России"/>
              <button type="button" className="elements__button-delite elements__button-delite_hidden">
              </button>
              <div className="elements__name">
                <h2 className="elements__title">Камчатка</h2>
                <div className="elements__group">
                  <button type="button" className="elements__button-like">
                  </button>
                  <p className="elements__counter">0</p>
                </div>
              </div>
            </div>
          </template>
        </section>
      </main>
    )
  );
}

export default Main;
