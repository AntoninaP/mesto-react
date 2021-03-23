import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import newApi from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({name: '', about: '', avatar: ''});

  React.useEffect(() => {
    newApi.getProfileInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, []);


  function handleEditAvatarClick() {
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

  function handleUpdateUser(user) {
    newApi.editProfileInfo(user.name, user.about)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setCard(null)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <div className="page">
            <Header/>
            <Main
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
            />
            <Footer/>
            <EditProfilePopup isOpen={isEditProfilePopupOpen}
                              onClose={closeAllPopups}
                              onUpdateUser={handleUpdateUser}/>
            <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
            </PopupWithForm>

            <ImagePopup onClose={closeAllPopups} card={selectedCard}/>

            <PopupWithForm name="popup-delete-card" title="Вы уверены?">
              <button type="submit" className="popup__button popup__button_small popup__button-place">Да</button>
            </PopupWithForm>

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
          </div>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
