const { GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED, GET_ALL_USER_FAILED, GET_ALL_USER_SUCCESS, GET_ALL_USER_PENDING, GET_ALL_PARTY_PENDING, GET_ALL_PARTY_SUCCESS, GET_ALL_PARTY_FAILED, ADD_PARTY_PENDING, ADD_PARTY_FAILED, ADD_PARTY_SUCCESS, DELETE_PARTY_SUCCESS, DELETE_PARTY_FAILED, DELETE_PARTY_PENDING, ADD_ELECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_ELECTION_FAILED, ADD_ELECTION_FAILED, ADD_ELECTION_SUCCESS, GET_ALL_ELECTION_SUCCESS, GET_ALL_CONNECTION_PENDING, GET_ALL_CONNECTION_FAILED, ADD_CONNECTION_FAILED, ADD_CONNECTION_PENDING, GET_ALL_CONNECTION_SUCCESS, ADD_CONNECTION_SUCCESS, ADD_USER_SUCCESS, ADD_USER_PENDING, ADD_USER_FAILED, USER_LOGIN_PENDING, USER_LOGIN_FAILED, ADD_VOTE_PENDING, GET_ALL_VOTE_PENDING, GET_ALL_VOTE_FAILED, ADD_VOTE_FAILED, ADD_VOTE_SUCCESS, GET_ALL_VOTE_SUCCESS } = require("./action")

let initialState = {
    users: [],
    partys: [],
    elections: [],
    connection: [],
    votes: [],
    isError: null,
    isLoading: false,
}

let userReducer = (state = initialState, action) => {
    console.log(action, "action from reducer");
    switch (action.type) {

        case GET_ALL_USER_PENDING, ADD_PARTY_PENDING, GET_ALL_PARTY_PENDING, DELETE_PARTY_PENDING, ADD_ELECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_CONNECTION_PENDING, ADD_CONNECTION_PENDING, ADD_USER_PENDING, ADD_VOTE_PENDING, GET_ALL_VOTE_PENDING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_ALL_USER_FAILED, GET_ALL_PARTY_FAILED, ADD_PARTY_FAILED, DELETE_PARTY_FAILED, GET_ALL_ELECTION_FAILED, ADD_ELECTION_FAILED, GET_ALL_CONNECTION_FAILED, ADD_CONNECTION_FAILED, ADD_USER_FAILED, GET_ALL_VOTE_FAILED, ADD_VOTE_FAILED: {
            return {
                ...state,
                isError: action.payload,
                isLoading: false,
            }
        }

        case GET_ALL_USER_SUCCESS: {
            console.log(action.payload, "action from reducer");
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        }


        case GET_ALL_PARTY_SUCCESS: {
            return {
                ...state,
                partys: action.payload,
                isLoading: false,
            }
        }

        case ADD_PARTY_SUCCESS: {
            return {
                ...state,
                partys: state.partys.concat(action.payload),
                isLoading: false,
            }
        }

        case DELETE_PARTY_SUCCESS: {
            return {
                ...state,
                partys: state.partys.filter((item) => item._id != action.payload),
                isLoading: false,
            }
        }

        case ADD_ELECTION_SUCCESS: {
            return {
                ...state,
                elections: state.elections.concat(action.payload),
                isLoading: false
            }
        }

        case GET_ALL_ELECTION_SUCCESS: {
            return {
                ...state,
                elections: action.payload,
                isLoading: false,
            }
        }

        case GET_ALL_CONNECTION_SUCCESS: {
            return {
                ...state,
                connection: action.payload,
                isLoading: false,
            }
        }

        case ADD_CONNECTION_SUCCESS: {
            return {
                ...state,
                connection: state.connection.concat(action.payload),
                isLoading: false,
            }
        }

        case ADD_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.concat(action.payload),
                isLoading: false,
            }
        }

        case ADD_VOTE_SUCCESS: {
            return {
                ...state,
                votes: state.votes.concat(action.payload),
                isLoading: false,
            }
        }

        case GET_ALL_VOTE_SUCCESS: {
            return {
                ...state,
                votes: action.payload,
                isLoading: false,
            }
        }

        default: {
            return {
                ...state,
                isError: action.payload,
            }
        }

    }
}

export default userReducer