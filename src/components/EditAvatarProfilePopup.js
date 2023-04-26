import PopupWithForm from "./PopupWithForm";

function EditAvatarProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title="Обновить аватар"
            buttonText="Сохранить"
            name="avatar-edit"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input required name="avatar" type="url" id="avatarLink" className="form__input"
                placeholder="Ссылка на картинку" />
            <span className="form__input-error" id="avatarLink-error"></span>
        </PopupWithForm>

    )
}

export default EditAvatarProfilePopup; 