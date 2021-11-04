import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from './todos/todo.reducer';

import { Todo } from "./todos/models/todo.model";
import { filtosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer

}