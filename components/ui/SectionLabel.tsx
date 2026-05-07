interface Props {
  children: React.ReactNode
}

export default function SectionLabel({ children }: Props) {
  return (
    <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-accent-dark mb-2.5">
      {children}
    </p>
  )
}
