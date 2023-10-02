import Button from "../../../components/Button/views/Button"

const List = () => {
  const list = ["Ed Sheeran", "Billie Eilish", "Ariana Grande", "The Weeknd", "Taylor Swift", "Justin Bieber", "Dua Lipa", "Beyonce"]

  return (
    <>
      <div className="list text-2xl text-white w-full h-full flex justify-center items-center">
        <ul className="flex flex-col items-start gap-5">
          {list.map((item, index) => (
            <>
              <li className="flex justify-between w-[400px]" key={item}>
                <p>{item}</p>
                <Button key={index} action={item} />
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default List