import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Todos from "./components/todos";
import { OptionType } from "./types";

// const isInit = false;

function App() {
  const { data } = useQuery<OptionType>(
    ["option"],
    () =>
      fetch("/option").then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status} ${res.statusText}`);
      }),
    {
      initialData: JSON.parse(localStorage.getItem("option") || "[]"),
      onSuccess(data) {
        console.debug(data);
        localStorage.setItem(
          "option",
          JSON.stringify({
            todos: true,
            attendance: true,
            banner: true,
          })
        );
      },
    }
  );
  return (
    <>
      <header>
        <h1>todos</h1>
      </header>
      <main>
        <button onClick={() => window.test()}>test</button>
        {data?.banner && <div>배너 입니다.</div>}
        {data?.attendance && <div>출석체크 입니다.</div>}
        {data?.todos && <Todos />}
      </main>
    </>
  );
}

export default App;
