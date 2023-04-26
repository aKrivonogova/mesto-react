import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title="Новое место"
            buttonText="Создать"
            name="add"
            isOpen={isOpen}
            onClose={onClose}
        >
            <input name="name" type="text" id="cardName" className="form__input" placeholder="Название" required
                minLength={"2"} maxLength={"30"} />
            <span className="form__input-error" id="cardName-error"></span>
            <input required name="link" type="url" id="cardImageSrc" className="form__input"
                placeholder="Ссылка на картинку" />
            <span className="form__input-error" id="cardImageSrc-error"></span>

        </PopupWithForm>
    )
}

export default AddPlacePopup;