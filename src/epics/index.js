import { combineEpics } from 'redux-observable';
// Import epics and combine
import home from './home';

const rootEpic = combineEpics(...home);

export default rootEpic;
