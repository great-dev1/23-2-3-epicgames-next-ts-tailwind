const Badge = ({
  children,
  className,
}: {
  children: string | React.ReactNode
  className?: string
}) => {
  return (
    <span className={`inline-block px-2.5 py-1 rounded text-[9px] tracking-[1px] font-medium uppercase ${className}`}>
      {children}
    </span>
  )
}

export default Badge
