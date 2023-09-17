import { useState } from "react"

function ListGoup() {

  const cities = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ]

  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={city}
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGoup