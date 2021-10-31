import { combineReducers } from 'redux';
import reducer from './cellsReducer';
import cellsReducer from './cellsReducer';

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducers>;
