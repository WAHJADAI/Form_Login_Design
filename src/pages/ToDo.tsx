import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Item } from "../Type/Item";

const schema = z.object({
  task: z.string().min(1),
});
type TaskData = z.infer<typeof schema>;
const ToDo = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const loadTodos = localStorage.getItem("todos");
    if (loadTodos) {
      return JSON.parse(loadTodos);
    } else return [];
  });

  const { register, handleSubmit, reset } = useForm<TaskData>({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container" style={{ fontFamily: "Prompt" }}>
      <div className="d-flex justify-content-center">
        <h1 style={{ color: "blue" }}>To Do List</h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          setItems([...items, { ...data, id: Date.now(), checklist: false }]),
            reset();
        })}
      >
        <div
          className="d-flex justify-content-center flex-column "
          style={{ alignItems: "center" }}
        >
          <input
            {...register("task")}
            type="text"
            id="task"
            className="form-control"
            style={{ height: "35px", margin: "5px" }}
          />
          <button
            className="btn btn-primary"
            type="submit"
            style={{ height: "35px", width: "100px", margin: "5px" }}
          >
            Add Task
          </button>
        </div>
      </form>
      <div style={{ marginTop: "20px" }}>
        <ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {items?.map((item) => (
              <li style={{ listStyleType: "none" }} key={item.id}>
                <input
                  type="checkbox"
                  disabled={item.checklist}
                  onClick={() => {
                    setItems(
                      items.map((updateTask) =>
                        updateTask.id === item.id
                          ? { ...updateTask, checklist: !updateTask.checklist }
                          : { ...updateTask }
                      )
                    );
                  }}
                />
                {item.task}
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    setItems(
                      items.filter((itemIdDelete) => itemIdDelete.id != item.id)
                    )
                  }
                >
                  Delete
                </button>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
