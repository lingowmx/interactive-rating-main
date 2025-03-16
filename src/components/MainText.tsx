interface MainTextProps {
  children: string
}

export const MainText = ({children}: MainTextProps) => {
  return (
    <div className="w-72">
      <h1 className="text-white">{children}</h1>
    </div>
  )
}
