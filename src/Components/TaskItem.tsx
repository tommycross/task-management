import styled from "styled-components";

export interface TaskItemProps {
    /** Has the task been completed? */
    completed: boolean;
    /** Label for the task item */
    label: string;
    /** Handler for change in checked state */
    onToggle: () => void; 
}

const TaskItem : React.FC<TaskItemProps> = (props) => {
    return(
        <TaskItemContainer>
            <TaskCheckbox type='checkbox' checked={props.completed} onChange={props.onToggle} />
            <TaskLabel>{props.label}</TaskLabel>
        </TaskItemContainer>
    )
}

export default TaskItem;

const TaskItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0px;
`;

const TaskCheckbox = styled.input`
    width: 1.2em;
    height: 1.2em;
`;

const TaskLabel = styled.span`
    font-size: 1.2em;
`;