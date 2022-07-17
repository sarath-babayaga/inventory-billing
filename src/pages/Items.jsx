import React from 'react'
import "./Items.css"
import ItemData from "../data/ItemData"

const Items = () => {
  return (
    <div className="items-content">
        {/* <h1>Items</h1> */}
        <ItemData/>
    </div>
  )
}

export default Items