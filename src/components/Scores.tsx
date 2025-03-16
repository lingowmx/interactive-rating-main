interface ScoresProps {
  setSelectedScore: (score: number) => void;
}

const myScores = [1, 2, 3, 4, 5];
export const Scores = ({setSelectedScore}: ScoresProps) => {
  return (
    <div className=" w-72 flex justify-center items-center gap-4">
      {myScores.map((num) => {
        return (
          <label key={num} className="cursor-pointer">
            <input
              type="radio"
              name="number"
              value={num}
              className="hidden peer"
              onChange={() => setSelectedScore(num)}
            />
            <div className="bg-green-500 rounded-full flex justify-center items-center w-10 h-10">
              {num}
            </div>
          </label>
        );
      })}
    </div>
  );
};
