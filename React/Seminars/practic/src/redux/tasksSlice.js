import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

// Асинхронное действие для загрузки задач
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1000); // Имитация задержки
    });
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        status: "idle", // idle, loading, succeeded, failed
    },
    reducers: {
        toggleTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
