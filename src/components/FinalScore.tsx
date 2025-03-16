interface FinalScoreProps{
  selectedScore: number | null
}

export const FinalScore = ({selectedScore}: FinalScoreProps) => {
  return (
    <div>
      <p className="text-white">You selected {selectedScore} out of 5</p>
    </div>
  )
}
