import Toast from "../../../components/Toast/views/Toast";

import "../styles/Home.css"
import List from "../../List/views/List";
import Popup from "../../../components/Popup/views/Popup";
import { useState } from "react";

function Home() {

  // const cities = [
  //   "New York",
  //   "San Francisco",
  //   "Tokyo",
  //   "London",
  //   "Paris"
  // ]

  const [isPopup, setIsPopup] = useState(false)

  return (
    <>
      <div className="wrap relative">
        <Popup isPopupOpen={isPopup} />
        <div onClick={() => { setIsPopup(true) }} className="absolute top-10 left-10 w-20 h-20">
          <button className="btn w-full h-full"><i className="fa-solid fa-arrow-left fa-fade text-white text-3xl"></i></button>
        </div>
        <List />
      </div>
      <Toast />
    </>
  )
}

export default Home