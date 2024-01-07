import Button from "../../../components/Button/views/Button"

interface Props {
  name: string,
}

const Celebrity = ({ name }: Props) => {
  return (
    <>
      <li className="flex justify-between w-[400px]">
        <p>{name}</p>
        <Button action={name} />
      </li>
    </>
  )
}

export default Celebrity