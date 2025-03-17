import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}
 
export const Container = ({children}: ContainerProps) => {
  return (
    <div className="bg-darkBlue w-80 h-80 rounded-xl p-5">
      {children}
    </div>
  )
}
