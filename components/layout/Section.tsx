type SectionProps = {
  children: React.ReactNode
}

type SectionTitleProps = {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <section className="mt-10">{children}</section>
}

const Title = ({ children }: SectionTitleProps) => {
  return (
    <h3 className="mb-5 text-xl font-bold uppercase text-neutral-700">
      {children}
    </h3>
  )
}

export default Object.assign(Section, { Title })
