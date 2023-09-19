import { toast } from "react-toastify"

interface Props {
  action: string,
  text: string
}


const Button = ({ action, text }: Props) => {
  const notify = () => { toast(action) }
  return (
    <>
      <button type="button" className="btn btn-outline-danger" onClick={notify}>{text}</button>
    </>
  )
}

export default Button