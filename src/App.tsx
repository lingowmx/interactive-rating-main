import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { FinalScore } from "./components/FinalScore";
import { MainStar } from "./components/MainStar";
import { MainText } from "./components/MainText";
import { Scores } from "./components/Scores";
import { SecondText } from "./components/SecondText";
import { SubmitButton } from "./components/SubmitButton";
import { ThanksIcon } from "./components/ThanksIcon";
import { Text } from "./Constants/Text";

function App() {
  const [selectedScore, setSelectedScore] = useState(Number)
  return (
    <main className="bg-veryDarkBlue h-screen flex justify-center items-center">
      <Container>
        <div>
          <MainStar />
          <MainText>{Text.Main_Question_Text}</MainText>
          <SecondText>{Text.Main_Score_Text}</SecondText>
          <Scores />
          <SubmitButton />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <ThanksIcon/>
          <FinalScore selectedScore={selectedScore}/>
          <MainText>{Text.Thanks_Text}</MainText>
          <SecondText>{Text.Thanks_Second_Text}</SecondText>
        </div>
      </Container>
    </main>
  );
}

export default App;
