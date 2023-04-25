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
            <input required name="avatar" type="url" id="avatarLink" class="form__input"
                placeholder="Ссылка на картинку" />
            <span class="form__input-error" id="avatarLink-error"></span>
        </PopupWithForm>

    )
}

export default EditAvatarProfilePopup; 