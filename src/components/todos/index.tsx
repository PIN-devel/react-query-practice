import { useQuery } from "@tanstack/react-query";
import { TodoType } from "../../types";

export default function Todos() {
  const { data } = useQuery<TodoType[]>(
    ["todos"],
    () =>
      fetch("/todos").then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status} ${res.statusText}`);
      }),
    {
      initialData: JSON.parse(localStorage.getItem("todos") || "[]"),
      onSuccess(data) {
        console.debug(data);
        localStorage.setItem(
          "todos",
          JSON.stringify([
            {
              id: 1,
              content: "초기 데이터 1",
            },
            {
              id: 2,
              content: "초기 데이터 2",
            },
            {
              id: 3,
              content: "초기 데이터 3",
            },
            {
              id: 4,
              content: "초기 데이터 4",
            },
            {
              id: 5,
              content: "초기 데이터 5",
            },
            {
              id: 6,
              content: "초기 데이터 6",
            },
          ])
        );
      },
      // enabled,
    }
  );

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}
