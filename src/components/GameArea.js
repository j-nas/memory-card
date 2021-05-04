import React, {useState} from "react"
import "./GameArea.css"
import Card from "./Card"
import arrayShuffle from "array-shuffle"
import characters from "./characters"
function GameArea(props) {
  
  const [cardList, setCardList] = useState(arrayShuffle(characters))
  const [clickedCards, setClickedCards] = useState([])
  function shuffleCards() {
    setCardList(arrayShuffle(characters))
  }
  // useEffect(()=>{
  //   document.addEventListener("click", clickHandler)
  //   return() => {document.removeEventListener("click", clickHandler)}
  // })
  function clickHandler(e) {
    e.preventDefault()
    const { id } = e.target
    if (clickedCards.find(index => index === id )) {
      props.resetScore()
      setClickedCards([])
      shuffleCards()
      return 
    } 
    setClickedCards([...clickedCards, id])
    console.log(clickedCards)
    props.addScore()
    shuffleCards()
    
    
  }
 
  let cardListMap = cardList.map(cards => {
    return(
      <Card 
        key={cards.id}
        name={cards.charName}
        imgUrl={cards.imgUrl}
        setId={cards.id}
        clickHandler={clickHandler}
      />
    )
  })
  
  return (
    <div className="container">  
      Click the parasites only once. <br/>
      <div className="gameArea">
        {cardListMap}
      </div>
    </div>
  )
}

export default GameArea