import { useEffect, useState } from "react";
import api from '../utils/api'
import Card from './Card'
function Main({ handleEditAvatarClick, handleAddPlaceClick, handleEditProfileClick, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
      })
      .catch((error) => console.log(error));

    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((error) => console.log(error))
  },[])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar-content">
            <img className="profile__avatar" src={userAvatar}
              alt="картинка аватар профиля" />
            <button className="profile__avatar-edit-button" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__info">
            <div className="profile__head">
              <h1 className="profile__name">
                {userName}
              </h1>
              <button type="button" className="profile__edit-button"
                aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__description">
              {userDescription}
            </p>
          </div>
        </div>
        <button type="button" id="profile__add-button" className="profile__add-button"
          aria-label="Создать новую карточку" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
              />
            ))
          }

        </ul>
      </section>
    </main>
  )
};
export default Main;