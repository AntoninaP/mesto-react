import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {


  return (
    <PopupWithForm name="avatar" title="Обновить аватар?" isEditAvatarPopupOpen={props.isOpen}
                   closeAllPopups={props.onClose}>
      <label>
        <input id="input" type="url" name="image" value=""
               className="popup__input popup__input_small popup__input-image"
               placeholder="Ссылка на картинку" required pattern="https?://.+"/>
        <span className="popup__input-error input-error">
              </span>
      </label>
      <button type="submit" className="popup__button popup__button_small popup__button-place">Создать</button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
