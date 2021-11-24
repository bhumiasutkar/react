import { call, put } from "@redux-saga/core/effects";
import { requestGetUser } from "../request/user";
import { setUser } from './../../actionCreator';


export function* getUserHandler () {
    try {
        const res = yield call(requestGetUser);
        const { data } = res;
        yield put(setUser(data)); // dispatch(setUser(data))
    } catch (error) {
        console.log(error);
    }
};


// onChange -> 