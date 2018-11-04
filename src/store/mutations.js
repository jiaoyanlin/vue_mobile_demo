import * as types from './mutation-type.js';

function setLocalList (list) {
    let str = JSON.stringify(list);
    localStorage.setItem('list', str);
}

export default {
    [types.SET_LIST_ADD](state, list) {
        state.list = [...state.list, list];
        setLocalList(state.list);
    },
    [types.SET_LIST](state, list) {
        state.list = list;
    },
    [types.SET_LIST_STAR](state, {index, flag}) {
        let newList = [...state.list];
        newList[index].star = flag;
        state.list = newList;
        setLocalList(newList);
    },
};
