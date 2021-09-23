import React from 'react'

function Card(props) {

  const dragStart = e => {
    const target = e.target
    // gets card id
    e.dataTransfer.setData('id', target.id)
    // keeps card visible
    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  const dragOver = e => {


  }
  return (
    // card that is dragging
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      { props.children }
    </div>
  )
}

export default Card
