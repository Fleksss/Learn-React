import ListGoup from "./components/ListGroup"

import './App.css'

function App() {

  const cities = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ]

  return <div className="main">
    <ListGoup cities={cities} heading="Cities" />
  </div>
}

export default App