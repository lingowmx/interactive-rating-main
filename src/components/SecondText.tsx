interface SecondTextProps {
  children: string
}

export const SecondText = ({children}: SecondTextProps) => {
  return (
    <div className="w-72">
      <p className="text-white">{children}</p>
    </div>
  )
}
