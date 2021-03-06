import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    (
      <body className="root">
      <Header/>
      <Main/>
      <Footer/>

      <PopupWithForm name="popup-user" title="Редактировать профиль">
        children={(
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
      )}
      </PopupWithForm>

      <PopupWithForm name="popup-place" title="Новое место">
        children={(
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
      )}
      </PopupWithForm>

      <ImagePopup/>

      <PopupWithForm name="popup-delete-card" title="Вы уверены?">
        children={(
        <>
          <button type="submit" className="popup__button popup__button_small popup__button-place">Да</button>
        </>
      )}
      </PopupWithForm>

      <PopupWithForm name="popup-avatar" title="Обновить аватар?">
        children={(
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
      )}
      </PopupWithForm>

      {/*<script type="module" src="../index.js">*/}
      {/*</script>*/}
      </body>
    )
  );
}

export default App;
