import '../App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import EditAvatarProfilePopup from './EditAvatarProfilePopup';
import AddPlacePopup from './AddPlacePopup'
import EditProfilePopup from './EditProfilePopup';
import { useState } from 'react';
import PopupWithImage from './PopupWithImage'
function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditAvatarProfileOpen, setEditAvatarProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
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

  return (
    <div className="page">
      <div className='page__content'>
        <Header />
        <Main handleEditAvatarClick={handleEditAvatarClick}
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditProfileClick={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditAvatarProfilePopup
          isOpen={isEditAvatarProfileOpen}
          onClose={closeAllPopups} />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithImage
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
