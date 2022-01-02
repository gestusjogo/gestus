import aluno from './aluno.js';
import aulas from './aulas.js';
import section from './section.js';
import levels from './levels.js';

const reducer = Redux.combineReducers({ levels, aluno, aulas, section});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
