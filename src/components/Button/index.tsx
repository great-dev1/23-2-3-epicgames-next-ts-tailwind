const Button = ({
  children,
  className,
}: {
  children: string | React.ReactNode
  className?: string
}) => {
  return (
    <button className={`flex items-center justify-center h-[50px] px-5 rounded text-xs font-medium tracking-[0.5px] uppercase ${className}`}>
      {children}
    </button>
  )
}

export default Button
