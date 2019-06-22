import {updateAchievement} from "../../utils/API";

const state = {
    points: 0,
    shares: 0,
    reports: 0
};

const getters = {
};

const actions = {
    updateAchievement({commit, rootState}, {type, amount}) {
        updateAchievement(rootState.studentId, rootState.sessionId, type, amount)
            .then(res => {
                commit('updateAchievement', {type, amount})
            })
            .catch(err => console.log(err))
    }
};

const mutations = {
    updateAchievement(state, {type, amount}) {
        state[type] += amount;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}