type CardProps = {
  children: React.ReactNode
}

type CardTitleProps = {
  children: React.ReactNode
}

type CardBodyProps = {
  children: React.ReactNode
}

type CardFooterProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white p-10 rounded-lg border border-gray-200 w-full">
      {children}
    </div>
  )
}

const Title = ({ children }: CardTitleProps) => {
  return <h3 className="mb-10 text-2xl text-center">{children}</h3>
}

const Body = ({ children }: CardBodyProps) => {
  return <div className="mb-10">{children}</div>
}

const Footer = ({ children }: CardFooterProps) => {
  return <div className="mb-0 text-center">{children}</div>
}

export default Object.assign(Card, { Title, Body, Footer })
