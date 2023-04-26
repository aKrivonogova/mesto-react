function Card({ card, onCardClick }) {

    function handleCardClick() {
        onCardClick(card)
    }
    return (
        <li className="element" >
            <img className="element__image" src={card.link} onClick={handleCardClick} />
            <button className="element__delete" type="button" aria-label="удалить данную карточку"></button>
            <div className="element__description-container">
                <h2 className="element__name">{card.link}</h2>
                <div className="element-like__container">
                    <button type="button" className="element__like" aria-label="лайкнуть данную карточку"></button>
                    <span className="element__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card; 