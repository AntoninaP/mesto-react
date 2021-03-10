import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setCard] = React.useState(null);


  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setCard(null)
  }

  return (
      <body className="root">
      <Header/>
      <Main
        onEditProfile = {handleEditProfileClick}
        onEditAvatar = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
      />
      <Footer/>

      <PopupWithForm name="user" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <>
          <label>
            <input id="user-input" type="text" name="name" value="" className="popup__input popup__input-name"
                   placeholder="Имя" required minLength="2" maxLength="40"/>
            <span className="popup__input-error user-input-error">
            </span>
          </label>
          <label>
            <input id="job-input" type="text" name="profession" value="" className="popup__input popup__input-job"
                   placeholder="О себе" required minLength="2" maxLength="200"/>
            <span className="popup__input-error job-input-error">
            </span>
          </label>
          <button type="submit" className="popup__button">Сохранить</button>
        </>
      </PopupWithForm>

      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <>
          <label>
            <input id="place-input" type="text" name="place-title" value=""
                   className="popup__input popup__input_small popup__input-place-title"
                   placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="popup__input-error place-input-error">
        </span>
          </label>
          <label>
            <input id="link-input" type="url" name="image" value=""
                   className="popup__input popup__input_small popup__input-image"
                   placeholder="Ссылка на картинку" required pattern="https?://.+"/>
            <span className="popup__input-error link-input-error">
        </span>
          </label>
          <button type="submit" className="popup__button popup__button_small popup__button-place">Создать</button>
        </>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>

      <PopupWithForm name="popup-delete-card" title="Вы уверены?">
        <>
          <button type="submit" className="popup__button popup__button_small popup__button-place">Да</button>
        </>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар?" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <>
          <label>
            <input id="input" type="url" name="image" value=""
                   className="popup__input popup__input_small popup__input-image"
                   placeholder="Ссылка на картинку" required pattern="https?://.+"/>
            <span className="popup__input-error input-error">
              </span>
          </label>
          <button type="submit" className="popup__button popup__button_small popup__button-place">Создать</button>
        </>
      </PopupWithForm>
      </body>
  );
}

export default App;
