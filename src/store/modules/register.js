const state = {
    baseInfo: null
}

const mutations = {
    SET_BASEINFO: (state, baseInfo) => {
        state.baseInfo = baseInfo
    }
}

const actions = {
    GetBaseInfo ({ commit, state }) {
        return state.baseInfo
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}