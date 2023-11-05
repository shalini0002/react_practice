import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todoSlice';

// export const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
export const store = configureStore({
    reducer: todoReducer
})