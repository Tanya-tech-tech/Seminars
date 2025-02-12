import cn from "classnames";
import { Method, UserAction } from "../const";
import { api } from "../api";

function DelModal({isOpen, onButtonClick, currentId}): JSX.Element {
  
  const handleButtonDelClick = (e) => {
    if(e.target.dataset.action){
      onButtonClick(false);
      handleButtonClick(e);
    } else{
      onButtonClick(false);
    }
  }

  const handleButtonClick = async (e) => {
      await api(Method.DELETE, { id: currentId });
    }

  return (
    <div className={cn('modal', {'is-active': isOpen})}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Вы действительно хотите удалить семинар</p>
          
          <div className="modal__buttons">
            <button data-action="remove" className="cross-btn modal__btn" type="button" aria-label="Закрыть попап" onClick={handleButtonDelClick}>Удалить</button>
            <button className="modal__btn-close" type="button" aria-label="Закрыть попап" onClick={handleButtonDelClick}>Закрыть</button>
          </div>
          
        </div>
      </div>
    </div>
  )
  
}

export default DelModal;

