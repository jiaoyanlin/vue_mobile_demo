import * as types from './mutation-type.js';

export default {
    setListAdd({commit}, payload) {
        commit(types.SET_LIST_ADD, payload);
    },
    setList({commit}, payload) {
        commit(types.SET_LIST, payload);
    },
    setListStar({commit}, payload) {
        commit(types.SET_LIST_STAR, payload);
    },
};
