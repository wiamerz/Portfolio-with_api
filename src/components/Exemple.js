import React, {useState} from 'react'

const Exemple = () => {

  const [color, setcolor] = useState("red")
  return (
    <div className='text-center'>
    <h1 style={ {color} }>Hello world</h1>

    <button  className='btn btn-pink'
    onClick={() => setcolor("pink")}
    > pink

    </button>
  </div>
  )
}

export default Exemple