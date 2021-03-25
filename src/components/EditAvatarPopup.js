import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState('');
  const avatarRef = React.useRef('');

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    setAvatar('')
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар?" isEditAvatarPopupOpen={props.isOpen}
                   closeAllPopups={props.onClose} onSubmit={handleSubmit}>
      <label>
        <input id="input" type="url" value={avatar} name="image" ref={avatarRef} onChange={handleChangeAvatar}
               className="popup__input popup__input_small popup__input-image"
               placeholder="Ссылка на картинку" required pattern="https?://.+"/>
        <span className="popup__input-error input-error">
              </span>
      </label>
      <button type="submit" className="popup__button popup__button_small popup__button-place"
              onClick={props.onClose}>Создать
      </button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
