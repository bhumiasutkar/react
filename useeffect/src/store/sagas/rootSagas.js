import { takeLatest } from 'redux-saga/effects';
import { getUserHandler } from './handler/user';
import { actions } from "../actionType";


export function* watcherSaga () {
    yield takeLatest(actions.GET_USER, getUserHandler);
}