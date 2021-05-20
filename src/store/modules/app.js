/** VUEX module for account **/
import AppService from '../../services/app.service'


// -----------------------------------------------------------------
const state = {
    ping : {
        loading: false,
        error: '',
        pong: ''
    },
}
// -----------------------------------------------------------------
const getters = {
    ping: (state) => {
        return state.ping
    },
}

// -----------------------------------------------------------------
const actions = {
    async callPing({ commit }) {
        commit('pingLoading')
        try {
            const res = await AppService.ping()
            console.debug(res)
            commit('pingLoadSucc', res)
            return true
        } catch (e) {
            console.error(e.response)
            commit('pingLoadErr', e.response.data)
            return false
        }
    },
}

const mutations = {
    pingLoading(state) {
        state.ping.loading = true
        state.ping.error = ''
    },
    pingLoadSucc(state, info) {
        state.ping.loading = false
        state.ping.error = ''
        state.ping.pong = info
    },
    pingLoadErr(state, msg) {
        state.ping.loading = false
        state.ping.error = msg
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}