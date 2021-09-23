import React from 'react'

function Board(props) {
  const drop = e => {
    // prevents default behavior on drop
    e.preventDefault()
    // transfer id between event e
    const card_id = e.dataTransfer.getData('id')
    // get element by id card_id
    const card = document.getElementById(card_id)
    card.style.display = 'block'
    // adds element to board
    e.target.appendChild(card)
  }

  const dragOver = e =>{
    e.preventDefault()

  }
  return (
    <div 
    id={props.id}
    onDrop={drop}
    onDragOver={dragOver}
    className={props.className}
    >
      { props.children }
    </div>
  )
}

export default Board
