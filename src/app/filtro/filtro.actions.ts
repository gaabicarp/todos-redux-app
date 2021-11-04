import { createAction, props } from "@ngrx/store";

export type filtosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{filtro: filtosValidos}>()
);