interface Props {
  name: string
}

const View = ({ name }: Props) => {
  return (
    <>
      <div className="view w-60 h-40 bg-white border-l-fuchsia-800 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full rotate-12 cursor-pointer">
        <p className="-rotate-45 flex justify-center items-center w-full h-full text-slate-800 font-medium text-3xl font-poppins">{name}</p>
      </div>
    </>
  )
}

export default View