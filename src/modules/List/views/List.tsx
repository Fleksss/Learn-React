import Celebrity from "../components/Celebrity"
import Toast from "../../../components/Toast/views/Toast";
import Popup from "../../../components/Popup/views/Popup";
import { useState } from "react";


const List = () => {
  const [isPopup, setIsPopup] = useState(false)
  const list: string[] = [
    "Justin Bieber",
    "Billie Eilish",
    "Justin Bieber",
    "Taylor Swift",
    "Ed Sheeran",
    "The Weeknd",
    "Dua Lipa",
    "Beyonce",
  ]

  return (
    <>
      <div className="w-screen h-screen bg-japanese bg-cover bg-no-repeat bg-center relative">
        <Popup isPopupOpen={isPopup} />
        <div onClick={() => { setIsPopup(true) }} className="absolute top-10 left-10 w-20 h-20">
          <button className="btn w-full h-full"><i className="fa-solid fa-arrow-left fa-fade text-white text-3xl"></i></button>
        </div>
        <div className="list text-2xl text-white w-full h-full flex justify-center items-center">
          <ul className="flex flex-col items-start gap-5">
            {list.map((item, idx) => {
              return <Celebrity key={idx} name={item} />
            })}
          </ul>
        </div>
      </div>
      <Toast />
    </>
  )
}

export default List