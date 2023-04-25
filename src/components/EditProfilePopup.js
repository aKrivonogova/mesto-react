import PopupWithForm from "./PopupWithForm";
function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            title="Редактировать профиль"
            buttonText="Сохранить"
            name="edit"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input name="name" type="text" id="userName" className="form__input" required minlength="2"
                maxlength="40" placeholder="Имя" />
            <span className="form__input-error" id="userName-error"></span>
            <input name="description" type="text" id="userDescription" className="form__input" required
                minlength="2" maxlength="200" placeholder="О себе" />
            <span className="form__input-error" id="userDescription-error"></span>
        </PopupWithForm>

    )
}
export default EditProfilePopup;