import { Suspense } from "react";
import Card from "./Componnent/Card";
import Footer from "./Componnent/Footer";
import Main from "./Componnent/Main";
import Navber from "./Componnent/Navber";

const Loaddata = () => fetch("/json.jsx").then((res) => res.json());


function App() {
  const Promisfetch = Loaddata()
  return (
    <>
      <Navber></Navber>


    <Suspense fallback={"loading..."}>
        <Main Promisfetch={Promisfetch}></Main>
    </Suspense>

      <Footer></Footer>
    </>
  );
}
export default App;
