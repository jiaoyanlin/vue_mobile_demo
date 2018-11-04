import * as types from './mutation-type.js';

export default {
    [types.SET_MYTEST](state, mytest) {
        state.mytest = 'from mutaions ------- ' + mytest;
    }
};
