import Card from "../components/card";
import { useEffect, useState } from "react";
import DelModal from "../components/modalDel";
import UpdateModal from "../components/modalUpdate";

function App() {
  const BACKEND_URL = 'http://localhost:3000/seminars';
  const [cards, setCards] = useState([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  
  const currentCard = currentId ? cards.find((it) => it.id === currentId) : null;

  useEffect(() =>{
    const getCard = async(query? : string, endpoint = BACKEND_URL) => {
      try{
        query ? (query = `?${query}`) : (query = '');
        const response = await fetch(`${endpoint}${query}`);
        if (!response.ok) throw new Error(response.statusText);
  
        const json = await response.json();
        
        setCards(json);
        console.log(cards);
        return json;
      } catch(err){
        console.error(err.message || err)
      }
    }
    
    getCard();
  }, [isOpenModal, isOpenUpdateModal])

  return (
    <>
      <main>
        <h1>НАШИ СЕМИНАРЫ</h1>
        <div className="container">
          {cards.map((it) => 
          <Card key={it.id} card={it} onButtonDelClick={setIsOpenModal} onChangeCurrentId={setCurrentId} onButtonUpdateClick={setIsOpenUpdateModal}/>)}
        </div>
        <DelModal isOpen={isOpenModal} onButtonClick={setIsOpenModal} currentId={currentId}/>
        <UpdateModal isOpen={isOpenUpdateModal} currentCard={currentCard} onButtonSubmitClick={setIsOpenUpdateModal}/>
      </main>
    </>
  );
}

export default App;
