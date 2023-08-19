// import { useState } from 'react';

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHTTP from "../../hooks/use-http";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { isLoading, error, sendRequest: PostRequest } = useHTTP();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    PostRequest({
      url: "https://react-custom-hook-66df9-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: { text: taskText },
      headers: { "Content-Type": "application/json" },
    },
    createTask.bind(null, taskText));

  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
