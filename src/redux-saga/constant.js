// BASE URL 

export const base_url = process.env.NEXT_PUBLIC_BASE_URL

// ADMIN 

export const ADD_ADMIN = "/admin/create"
export const LOGIN_ADMIN = "/login/admin"

// USER

export const ADD_USER = "/user/create"
export const GET_USER = "/user/finduser/"
export const GET_ALL_USER = "/user/list"
export const DELETE_USER = "/user/delete/"
export const LOGIN_USER = "/login/user"

// ELECTION

export const ADD_ELECTION = "/election/create"
export const GET_ELECTION = "/election/findId/"
export const GET_ALL_ELECTION = "/election/list"
export const DELETE_ELECTION = "/election/delete/"

// PARTY

export const ADD_PARTY = "/party/create_party"
export const GET_ALL_PARTY = "/party/list"
export const GET_PARTY = "/party/findId/"
export const DELETE_PARTY = "/party/delete/"

// PARTY LIST

export const ADD_PARTY_LIST = "/partylist/create"
export const GET_PARTY_LIST = "/partylist/findId/"
export const GET_ALL_PARTY_LIST = "/partylist/list"

// VOTE

export const ADD_VOTE = "/vote/create"
export const GET_VOTE = "/vote/findId/"
export const GET_ALL_VOTE = "/vote/list"
export const DELETE_VOTE = "/vote/delete/"

// TOTAL VOTES

export const TOTAL_VOTES = "/total/count"