interface ScoresProps {
  setSelectedScore: (score: number) => void;
}

const myScores = [1, 2, 3, 4, 5];
export const Scores = ({setSelectedScore}: ScoresProps) => {
  return (
    <div className=" w-[280px] flex justify-between items-center gap-4">
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
            <div 
              className={`bg-lightGrey/30 text-lightGrey rounded-full flex justify-center items-center w-9 h-9 hover:bg-white hover:text-black
              peer-checked:bg-amber-600 peer-checked:text-black mb-4`}>
              {num}
            </div>
          </label>
        );
      })}
    </div>
  );
};
