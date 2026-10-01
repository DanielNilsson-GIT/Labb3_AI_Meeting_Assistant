import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type tool } from "../types/types";

const initialState: tool = { selectedTool: "Summary" };

const toolSlice = createSlice({
    name: "toolio",
    initialState,
    reducers: {
        changeTool: (state, action: PayloadAction<tool>) => {
            state.selectedTool = action.payload.selectedTool;
        },
    },
});

export const { changeTool } = toolSlice.actions;
export default toolSlice.reducer;
