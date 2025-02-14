import React from 'react'

import {Link} from "react-router-dom";

const MainPage = () => {

  return (
    <div>MainPage
        <Link to="/">
              <button className ="bg-blue-200 p-2 m-2 rounded-3xl">Portfolio</button>
       </Link>

    </div>
  )
}

export default MainPage
