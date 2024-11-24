import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, toggleTask } from "../../redux/tasksSlice";
import {
    List,
    ListItem,
    ListItemText,
    Checkbox,
    CircularProgress,
    Typography,
} from "@mui/material";

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, status } = useSelector((state) => state.tasks);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTasks());
        }
    }, [status, dispatch]);

    if (status === "loading") {
        return <CircularProgress />;
    }

    if (status === "failed") {
        return <Typography color="error">Ошибка загрузки задач</Typography>;
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Список задач
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem
                        key={task.id}
                        button
                        onClick={() => dispatch(toggleTask(task.id))}
                    >
                        <Checkbox checked={task.completed} />
                        <ListItemText
                            primary={task.title}
                            style={{
                                textDecoration: task.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskList;
