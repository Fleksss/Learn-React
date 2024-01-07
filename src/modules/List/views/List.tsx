import Celebrity from "../components/Celebrity"

const List = () => {
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
      <div className="list text-2xl text-white w-full h-full flex justify-center items-center">
        <ul className="flex flex-col items-start gap-5">
          {list.map((item, idx) => {
            return <Celebrity key={idx} name={item} />
          })}
        </ul>
      </div>
    </>
  )
}

export default List