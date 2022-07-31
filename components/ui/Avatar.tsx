type AvatarProps = {
  firstName: string
  lastName: string
}

const Avatar = ({ firstName, lastName }: AvatarProps) => {
  return (
    <div className="border border-gray-200 p-2 bg-gray-100 rounded-full text-md text-neutral-400 font-bold">
      {firstName[0]}
      {lastName[0]}
    </div>
  )
}

export default Avatar
