// import ListGoup from "./components/ListGroup"
import Alert from "./modules/Alert/views/Alert"
import Toast from "./components/Toast/views/Toast"

import './App.css'
import Button from "./components/Button/views/Button";

function App() {

  // const cities = [
  //   "New York",
  //   "San Francisco",
  //   "Tokyo",
  //   "London",
  //   "Paris"
  // ]

  return (<div className="main">
    {/* <ListGoup cities={cities} heading="Cities" /> */}
    <Alert>
      <h1>Hello</h1>
    </Alert>
    <Button action="Wow so easy!" text='Click!' />


    <Toast />
  </div>
  )
}

export default App