import '../App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditAvatarProfilePopup from './EditAvatarProfilePopup';
import AddPlacePopup from './AddPlacePopup'
import EditProfilePopup from './EditProfilePopup';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import ImagePopup from './ImagePopup'
import CurrentUserContext from '../contexts/CurrentUserContext'

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
  });

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditAvatarProfileOpen, setEditAvatarProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => console.log(error));

    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((error) => console.log(error))
  }, [])

  function handleEditAvatarClick() {
    setEditAvatarProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleCardClick(props) {
    setSelectedCard(props)
  }
  function closeAllPopups() {
    setEditAvatarProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard(null)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((res) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? res : c))
        );
      })
      .catch(error => console.log(`error: ${error}`));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((res) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(error => console.log(`error: ${error}`));
  }

  function handleUpdateUser(data) {
    api.setUserInfoByAPI(data)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(error => console.log(`error: ${error}`));
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatarByAPI(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(error => console.log(`error: ${error}`));
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(error => console.log(`error: ${error}`));
  }
  return (
    <div className="page">
      <div className='page__content'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main handleEditAvatarClick={handleEditAvatarClick}
            handleAddPlaceClick={handleAddPlaceClick}
            handleEditProfileClick={handleEditProfileClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditAvatarProfilePopup
            isOpen={isEditAvatarProfileOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
