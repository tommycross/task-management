import { useState } from "react";
import TaskItem from "./TaskItem";

import styled from "styled-components";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const TaskList = () => {

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Complete the project", completed: false },
        { id: 2, title: "Review PRs", completed: true },
        { id: 3, title: "Update documentation", completed: false }
    ]);

    const handleItemToggle = (itemId : number) => {
        setTasks((existingTasks) => {
            return existingTasks.map((task) => 
                task.id === itemId ? { ...task, completed: !task.completed } : task
            )
        })
    };

    return(
        <StyledTaskList>
            {tasks.map((task)=> (
                <li>
                    <TaskItem 
                        key={task.id} 
                        label={task.title} 
                        completed={task.completed}
                        onToggle={() => handleItemToggle(task.id)}
                    />
                </li>
            ))}
        </StyledTaskList>
    )
}

export default TaskList;

const StyledTaskList = styled.ul`
    list-style: none;
    width: 500px;
    padding: 20px;
    border: 1px #EEEEEE solid;
    border-radius: 10px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
`;