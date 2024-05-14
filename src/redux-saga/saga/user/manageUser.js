import { GET_ALL_PARTY, GET_ALL_USER, base_url } from "../../constant";
import { ADD_CONNECTION_FAILED, ADD_CONNECTION_SUCCESS, ADD_ELECTION_FAILED, ADD_ELECTION_SUCCESS, ADD_PARTY_FAILED, ADD_PARTY_SUCCESS, ADD_USER_FAILED, ADD_USER_SUCCESS, ADD_VOTE_FAILED, ADD_VOTE_SUCCESS, DELETE_PARTY_FAILED, DELETE_PARTY_SUCCESS, GET_ALL_CONNECTION_FAILED, GET_ALL_CONNECTION_SUCCESS, GET_ALL_ELECTION_FAILED, GET_ALL_ELECTION_SUCCESS, GET_ALL_PARTY_FAILED, GET_ALL_PARTY_SUCCESS, GET_ALL_USER_FAILED, GET_ALL_USER_SUCCESS, GET_ALL_VOTE_FAILED, GET_ALL_VOTE_SUCCESS} from "../../user/action"
import { delete_api, get_api, patch_api, post_api } from "../../user/api"
import { call, put } from "redux-saga/effects"

// user

export function* hendle_get_user(action) {
    try {
        action.url = `${base_url + GET_ALL_USER}`

        let { data, status } = yield call(get_api, action);

        if (status === 200) {
           yield put({ type: GET_ALL_USER_SUCCESS, payload: data })
        } else {
           yield put({ type: GET_ALL_USER_FAILED, payload: data })
        }
    } catch (error) {
        put({ type: GET_ALL_USER_FAILED, payload: error })
    }
}

export function* hendle_add_user(action) {
    try {
        let { data, status } = yield call(post_api, action);
        console.log(data,"data from manage");
        if (status == 200) {
            yield put({ type: ADD_USER_SUCCESS, payload: data })
        } 
    } catch (error) {
        yield put({ type: ADD_USER_FAILED, payload: error })
    }
}

// party

export function* hendle_get_all_party(action) {
    try {
        action.url = `${base_url + GET_ALL_PARTY}`
 
        let { data, status } = yield call(get_api, action);
        if (status == 200) {
            yield put({ type: GET_ALL_PARTY_SUCCESS, payload: data })
        } else {
            yield put({ type: GET_ALL_PARTY_FAILED, payload: data })
        }
    } catch (error) {
        put({ type: GET_ALL_PARTY_FAILED, payload: error })
    }
}

export function* hendle_add_party(action) {
    try {
        let { data, status } = yield call(post_api, action);
        if (status == 200) {
            yield put({ type: ADD_PARTY_SUCCESS, payload: data })
        } else {
            yield put({ type: ADD_PARTY_FAILED, payload: data })
        }
    } catch (error) {
        yield put({ type: ADD_PARTY_FAILED, payload: error })
    }
}

export function* hendle_delete_party(action) {
    try {
        let { data, status } = yield call(delete_api, action);

        if (status == 200) {
            yield put({ type: DELETE_PARTY_SUCCESS, payload: action.id})
        } else {
            yield put({ type: DELETE_PARTY_FAILED, payload: data })
        }
        
    } catch (error) {
        yield put({ type: DELETE_PARTY_FAILED, payload: error })
    }
}


// election

export function* hendle_add_election(action){
    try {
        let { data, status } = yield call(post_api, action);
        if (status == 200) {
            yield put({ type: ADD_ELECTION_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: ADD_ELECTION_FAILED, payload: error })
    }
}

export function* hendle_get_all_election(action){
    try {
        let { data, status } = yield call(get_api, action);
        if (status == 200) {
            yield put({ type: GET_ALL_ELECTION_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: GET_ALL_ELECTION_FAILED, payload: error })
    }
}

// connection

export function* hendle_get_all_connection(action){
    try {
        let { data, status } = yield call(get_api, action);
        if (status == 200) {
            yield put({ type: GET_ALL_CONNECTION_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: GET_ALL_CONNECTION_FAILED, payload: error })
    }
}

export function* hendle_add_connection(action){
    try {
        let { data, status } = yield call(post_api, action);
        if (status == 200) {
            console.log(data, "data from manage");
            yield put({ type: ADD_CONNECTION_SUCCESS, payload: data })
        } 
    } catch (error) {
        yield put({ type: ADD_CONNECTION_FAILED, payload: error })
    }
}

// vote 

export function* hendle_get_all_vote(action){
    try {
        let { data, status } = yield call(get_api, action);
        if (status == 200) {
            yield put({ type: GET_ALL_VOTE_SUCCESS, payload: data })
        }
    } catch (error)
    {
        yield put({ type: GET_ALL_VOTE_FAILED, payload: error })
    }
}

export function* hendle_add_vote(action){
    try{
        let { data, status } = yield call(post_api, action);
        if (status == 200) {
            yield put({ type: ADD_VOTE_SUCCESS, payload: data })
        }
    }catch(error){
        yield put({ type: ADD_VOTE_FAILED, payload: error })
    }
}
