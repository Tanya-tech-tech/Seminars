import cn from "classnames";
import { useRef } from "react";
import { api } from "../api";
import { Method } from "../const";

function UpdateModal({isOpen, onButtonSubmitClick, currentCard}): JSX.Element {
console.log(currentCard)

const setUserFormSubmit = async(evt) => {
  evt.preventDefault();
  const updatedCard = new FormData(evt.target);
  const formValues = {
    title: updatedCard.get('name'),
    description: updatedCard.get('description'),
    date: updatedCard.get('date'),
    time: updatedCard.get('time'),
  }
  
  await api(Method.PUT, { id: currentCard.id, body: {...currentCard, ...formValues}});
    
  onButtonSubmitClick(false);
  
}

  return (
      <div className={cn('modal modal-update', {'is-active': isOpen})} >
        <form className="seminars__form form" onSubmit={setUserFormSubmit}>
          <div className="modal__wrapper">
            <div className="modal__overlay"></div>
            <div className="modal__content">
              <p className="title title--h4">Редактирование семинара</p>
              <label htmlFor="title" className="reviews__rating-label form__rating-label" title="Название семинара">Название семинара </label>
              <input type="text" id="title" name = "title"></input>

              <label htmlFor="description" className="reviews__rating-label form__rating-label" title="Описание семинара">Описание семинара </label>
              <textarea id="description" name="description"></textarea>

              <label htmlFor="date" className="reviews__rating-label form__rating-label" title="Дата семинара">Дата семинара </label>
              <input type="date" id="date" name="date"></input>

              <label htmlFor="time" className="reviews__rating-label form__rating-label" title="время семинара">Время семинара </label>
              <input type="time" id="time" name="time"></input>

              <div className="modal__buttons">
                <button className="form__submit button" type="submit" aria-label="Отправить" >Отправить</button>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    )
}

export default UpdateModal;
