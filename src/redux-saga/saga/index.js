import { all } from "redux-saga/effects";
import { hendle_add_connection_saga, hendle_add_election_saga, hendle_add_party_saga, hendle_add_user_saga, hendle_add_vote_saga, hendle_delete_party_saga, hendle_get_all_connection_saga, hendle_get_all_election_saga, hendle_get_all_party_saga, hendle_get_all_user_saga, hendle_get_all_vote_saga } from "./rootSaga/rootSaga";

function* rootSaga() {
   yield all([hendle_get_all_party_saga(),hendle_add_party_saga(),hendle_delete_party_saga(),hendle_get_all_election_saga(),hendle_add_election_saga(),hendle_get_all_connection_saga(),hendle_add_connection_saga(),hendle_add_user_saga(),hendle_get_all_user_saga(),hendle_add_vote_saga(),hendle_get_all_vote_saga()])
}

export default rootSaga;