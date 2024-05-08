import { takeLatest } from "redux-saga/effects";
import { ADD_CONNECTION_PENDING, ADD_ELECTION_PENDING, ADD_PARTY_PENDING, ADD_USER_PENDING, DELETE_PARTY_PENDING, GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING, GET_ALL_USER_PENDING} from "../../user/action";
import { hendle_add_connection, hendle_add_election, hendle_add_party, hendle_add_user, hendle_delete_party, hendle_get_all_connection, hendle_get_all_election, hendle_get_all_party, hendle_get_user } from "../user/manageUser";

// party saga 

export function* hendle_get_all_party_saga() {
    yield takeLatest(GET_ALL_PARTY_PENDING,hendle_get_all_party)
}

export function* hendle_add_party_saga() {
    yield takeLatest(ADD_PARTY_PENDING, hendle_add_party)
}

export function* hendle_delete_party_saga() {
    yield takeLatest(DELETE_PARTY_PENDING, hendle_delete_party)
}

// election saga

export function* hendle_get_all_election_saga() {
    yield takeLatest(GET_ALL_ELECTION_PENDING, hendle_get_all_election)
}

export function* hendle_add_election_saga() {
    yield takeLatest(ADD_ELECTION_PENDING, hendle_add_election)
}

// connection saga

export function* hendle_add_connection_saga(){
    yield takeLatest(ADD_CONNECTION_PENDING, hendle_add_connection)
}

export function* hendle_get_all_connection_saga(){
    yield takeLatest(GET_ALL_CONNECTION_PENDING, hendle_get_all_connection)
}

// user saga 

export function* hendle_get_all_user_saga() {
    yield takeLatest(GET_ALL_USER_PENDING, hendle_get_user)
}

export function* hendle_add_user_saga() {
    yield takeLatest(ADD_USER_PENDING, hendle_add_user)
}