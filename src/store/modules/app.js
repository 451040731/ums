const state = {
    isGlobalSpin: false,
}

const mutations = {
    changeGlobalSpin (state, show) {
        state.isGlobalSpin = show;
    },
}

export default {
    state,
    mutations
}