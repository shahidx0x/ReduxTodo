import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface CreateTodo {
    id: number,
    task: string,
    status: "complete" | "todo"| "nothing"
}

const initialState: CreateTodo = {

    id: 0,
    task: "",
    status: "nothing"
}

