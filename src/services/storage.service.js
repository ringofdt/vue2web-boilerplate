const TOKEN_KEY = 'bai_access_token'
const REFRESH_TOKEN_KEY = 'bai_refresh_token'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    },
}


const SESS_KEY = 'sess'
const SessService = {
    getSess() {
        return JSON.parse(localStorage.getItem(SESS_KEY))
    },

    saveSess(sess) {
        localStorage.setItem(SESS_KEY, JSON.stringify(sess))
    },

    removeSess() {
        localStorage.removeItem(SESS_KEY)
    },
}


export default TokenService
export { TokenService, SessService }