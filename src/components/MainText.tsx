interface MainTextProps {
  children: string
}

export const MainText = ({children}: MainTextProps) => {
  return (
    <div className="w-[280px]">
      <h1 className="text-white text-xl mb-4">{children}</h1>
    </div>
  )
}
