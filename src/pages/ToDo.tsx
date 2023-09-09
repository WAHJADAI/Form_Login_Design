import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  task: z.string().min(1),
});
type TaskData = z.infer<typeof schema>;
const ToDo = () => {
  const [items, setItems] = useState([
    { id: 1, task: "draf", checklist: false },
  ]);
  const { register, handleSubmit } = useForm<TaskData>({
    resolver: zodResolver(schema),
  });
  return (
    <div className="container" style={{ fontFamily: "Prompt" }}>
      <div className="d-flex justify-content-center">
        <h1 style={{ color: "blue" }}>To Do List</h1>
      </div>
      <form
        onSubmit={handleSubmit((data) =>
          setItems([...items, { ...data, id: Date.now(), checklist: false }])
        )}
      >
        <div>
          <input {...register("task")} type="text" id="task" />
          <button type="submit">Add Task</button>
        </div>
      </form>
      <div>
        <ul>
          {items?.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
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
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
