type ButtonProps = {
  title: string
  color: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ title, color, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`rounded-md bg-${color}-400 px-5 py-2 font-medium text-white hover:bg-${color}-300 disabled:bg-neutral-200 disabled:text-neutral-400`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button
