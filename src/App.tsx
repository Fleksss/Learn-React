// import ListGoup from "./components/ListGroup"
import Alert from "./modules/Alert/views/Alert"

import './App.css'

function App() {

  // const cities = [
  //   "New York",
  //   "San Francisco",
  //   "Tokyo",
  //   "London",
  //   "Paris"
  // ]

  return <div className="main">
    {/* <ListGoup cities={cities} heading="Cities" /> */
      <Alert>
        <h1>Hello</h1>
      </Alert>
    }
  </div>
}

export default App