import View from "../components/View"

interface Props {
  isPopupOpen: boolean
}

const popup = ({ isPopupOpen }: Props) => {
  if (isPopupOpen === true) {
    return (
      <>
        <div className="w-screen h-screen absolute top-0 left-0 z-50 backdrop-blur-md p-20">
          <div className="views flex flex-wrap justify-start items-start gap-5">
            <View name="List" />
          </div>
        </div>
      </>)
  }
  else {
    return (
      <>
        <div className="w-screen h-screen absolute top-0 left-0 z-50 backdrop-blur-md p-20 hidden">
          <div className="views flex flex-wrap justify-start items-start gap-5">
            <View name="List" />
          </div>
        </div>
      </>)
  }
}

export default popup