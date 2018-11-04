import * as types from './mutation-type.js';

export default {
    setMytest({commit}, {mytest}) {
        setTimeout(() => {
            commit(types.SET_MYTEST, 'from actions ------- ' + mytest);
        }, 1000);
    }
};
