interface Props {
  href: string
  variant: 'primary' | 'dark' | 'outline'
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<Props['variant'], string> = {
  primary: 'bg-accent text-white',
  dark:    'bg-dark text-white',
  outline: 'border-[1.5px] border-accent text-accent-dark bg-transparent',
}

export default function Button({ href, variant, children, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`text-[14px] font-semibold px-6 py-3 rounded-[7px] inline-block ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
