function Card({card, onButtonDelClick, onChangeCurrentId, onButtonUpdateClick}): JSX.Element | null{
  const {id, title, description, date, time, photo} = card;

  const handleButtonDelClick = () => {
    onButtonDelClick(true);
    onChangeCurrentId(id);
  }

  const handleButtonUpdateClick = () => {
    onButtonUpdateClick(true);
    onChangeCurrentId(id);
  }

  return (
    <article className='place-card' ><div>id {id}</div>
          <div className='title'>
            {title}
          </div>
          <div className='description'>
            {description}
          </div>
          <div className='date'>
            <span>Дата  </span>
            <span>{date}</span>
          </div>
          <div className='time'>
            <span>Время  </span>
            <span>{time}</span>
          </div>
          <div className='photo'>
          <img className="slide-img" src={photo} alt="Фото1"/>
            
          </div>
          <button data-id={id} className="btn-delete" onClick={handleButtonDelClick}>Удалить семинар</button>
          <button className="btn-update" onClick={handleButtonUpdateClick}>Редактировать семинар</button>
        </article>
  )
}

export default Card;
