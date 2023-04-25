function Main({ handleEditAvatarClick, handleAddPlaceClick, handleEditProfileClick }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar-content">
            <img className="profile__avatar" src=""
              alt="картинка аватар профиля" />
            <button className="profile__avatar-edit-button" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__info">
            <div className="profile__head">
              <h1 className="profile__name">
                Жак-Ив Кусто
              </h1>
              <button type="button" className="profile__edit-button"
                aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__description">
              Исследователь океана
            </p>
          </div>
        </div>
        <button type="button" id="profile__add-button" className="profile__add-button"
          aria-label="Создать новую карточку" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  )
};
export default Main;