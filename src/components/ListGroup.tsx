import { useState } from "react"

import "./ListGroup.css"

interface Props {
  cities: string[],
  heading: string
}

function ListGoup({ cities, heading }: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <div className="wrap">
        <h1>{heading}</h1>
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
      </div>
    </>
  )
}

export default ListGoup