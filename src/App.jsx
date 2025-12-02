import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Componnent/Footer";
import Main from "./Componnent/Main";
import Navber from "./Componnent/Navber";

const Loaddata = () => fetch("/json.jsx").then((res) => res.json());
function App() {
  const Promisfetch = Loaddata();
  return (
    <>
      <Navber></Navber>

      <Suspense fallback={"loading..."}>
        <Main Promisfetch={Promisfetch}></Main>
      </Suspense>

      <Footer></Footer>

      <ToastContainer position="top-center" />
    </>
  );
}
export default App;
