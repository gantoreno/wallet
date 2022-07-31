type AvatarProps = {
  firstName: string
  lastName: string
}

const Avatar = ({ firstName, lastName }: AvatarProps) => {
  return (
    <div className="flex aspect-square items-center justify-center rounded-full border border-gray-200 bg-gray-100 p-2 text-sm font-bold text-neutral-400">
      {firstName[0]}
      {lastName[0]}
    </div>
  )
}

export default Avatar
