import "./App.css";
import { Container } from "./components/Container";
import { MainStar } from "./components/MainStar";
import { MainText } from "./components/MainText";
import { Scores } from "./components/Scores";
import { SecondText } from "./components/SecondText";
import { SubmitButton } from "./components/SubmitButton";
import { Text } from "./Constants/Text";

function App() {
  return (
    <main className="bg-veryDarkBlue h-screen flex justify-center items-center">
      <Container>
        <MainStar />
        <MainText>{Text.Main_Text}</MainText>
        <SecondText>{Text.Second_Text}</SecondText>
        <Scores/>
        <SubmitButton />
      </Container>
    </main>
  );
}

export default App;
