import { Action, createReducer, on } from '@ngrx/store';
import { filtosValidos, setFiltro } from './filtro.actions';
 
export const initialState: filtosValidos = 'todos';
 
const _filtroReducer = createReducer<filtosValidos, Action>(
  initialState,
  on(setFiltro, (state, {filtro}) => filtro),
);
 
export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}