interface FinalScoreProps {
  selectedScore: number | null;
}

export const FinalScore = ({ selectedScore }: FinalScoreProps) => {
  return (
    <div>
      <p className="flex justify-center items-center text-amber-600 w-52 h-8 font-light bg-lightGrey/30 mb-4 rounded-full">
        You selected {selectedScore} out of 5
      </p>
    </div>
  );
};
