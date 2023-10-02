import { toast } from "react-toastify"

interface Props {
  action: string,
}


const Button = ({ action }: Props) => {
  const notify = () => { toast(action) }
  return (
    <>
      <button className="w-[200px] h-[50px] bg-gradient-to-r from-rose-800 to-rose-500 rounded-md" onClick={notify}>Click!</button>
    </>
  )
}

export default Button