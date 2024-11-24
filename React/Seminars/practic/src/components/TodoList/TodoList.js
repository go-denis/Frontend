import React, { useState } from "react";
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: task }]);
        setTask("");
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Список дел
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <TextField
                                    label="Новая задача"
                                    variant="outlined"
                                    fullWidth
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddTask}
                                    fullWidth
                                >
                                    Добавить
                                </Button>
                            </Grid>
                        </Grid>
                        <List>
                            {tasks.map((t) => (
                                <ListItem
                                    key={t.id}
                                    secondaryAction={
                                        <IconButton
                                            edge="end"
                                            color="error"
                                            onClick={() => handleDeleteTask(t.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={t.text} />
                                </ListItem>
                            ))}
                        </List>
                        {tasks.length === 0 && (
                            <Typography align="center" color="textSecondary">
                                Список пуст
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default TodoList;
