interface SecondTextProps {
  children: string
}

export const SecondText = ({children}: SecondTextProps) => {
  return (
    <div className="w-[280px]">
      <p className="text-lightGrey text-sm mb-4">{children}</p>
    </div>
  )
}
