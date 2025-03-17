interface SubmitButtonProps{
  selectedScore: number | null,
  setIsSubmited:(value: boolean) => void
}

export const SubmitButton = ({selectedScore, setIsSubmited}: SubmitButtonProps) => {
  return (
    <div className="w-[280px] h-10 flex justify-center">
      <button 
        className="bg-amber-600 w-64 rounded-full cursor-pointer hover:bg-white hover:font-bold"
        onClick={() => {
          if(selectedScore !== null){
            setIsSubmited(true)
          } else {
            alert ("please select a scre before submit")
          }
        }}>Submit</button>
    </div>
  );
};
