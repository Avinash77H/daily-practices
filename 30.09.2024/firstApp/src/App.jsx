
import Layout from "./components/Layout";
import "./App.css";

const obj = [
  { name: "nirma", day: 22, month: "january", year: 2001 },
  { name: "surfExel", day: 19, month: "march", year: 2021 },
  { name: "555", day: 12, month: "july", year: 2024 },
];
function App() {
  return (
    <>
      <Layout source={obj}>
      </Layout>
    </>
  );
}

export default App;
