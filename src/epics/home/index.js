import { REQUEST_USER_REPOS_FAILED, REQUEST_USER_REPOS_START } from '../../actions/home/actionTypes';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { doUserReposFulfilled } from '../../actions/home/doUserRepos';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';

// epic
const fetchUserRepos = action$ =>
  action$.pipe(
    ofType(REQUEST_USER_REPOS_START),
    mergeMap(action => ajax.getJSON(`https://api.github.com/users/${action.payload}/repos`)),
    map(response => doUserReposFulfilled(response)),
    catchError(error => {
      console.log(error);
    })
  );

export default [fetchUserRepos];
