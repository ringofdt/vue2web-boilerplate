import axios from 'axios'
// import store from '../store'
import TokenService from '../services/storage.service'
import router from '../router'



const ApiService = {

    // Stores the 401 interceptor position so that it can be later ejected when needed
    _401interceptor: null,
    _ajax: null,

    init(baseURL) {
        this._ajax = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    },

    setHeader() {
        this._ajax.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getToken()}`
        this._ajax.defaults.headers.common["Content-Type"] = 'application/json'
    },

    removeHeader() {
        this._ajax.headers = {}
    },

    get(resource) {
        return this._ajax.get(resource)
    },

    post(resource, data) {
        return this._ajax.post(resource, data)
    },

    put(resource, data) {
        return this._ajax.put(resource, data)
    },

    delete(resource) {
        return this._ajax.delete(resource)
    },


    mount401Interceptor() {
        this._401interceptor = this._ajax.interceptors.response.use(
            response => response,
            error => {
                const { config, response } = error
                console.error(response)
                if (response.status === 401) {
                    if (
                        !Object.prototype.hasOwnProperty.call(config, "NotRedirect401") ||
                        config.NotRedirect401 !== true
                    ) {
                        // store.dispatch('auth/logout')
                        router.replace("/logout")
                    }
                }
                return Promise.reject(error)
            }
        )

        // this._401interceptor = this._ajax.interceptors.response.use(
        //     (response) => {
        //         return response
        //     },
        //     async (error) => {
        //         if (error.request.status == 401) {
        //             if (error.config.url.includes('/o/token/')) {
        //                 // Refresh token has failed. Logout the user
        //                 store.dispatch('auth/logout')
        //                 throw error
        //             } else {
        //                 // Refresh the access token
        //                 try {
        //                     await store.dispatch('auth/refreshToken')
        //                     // Retry the original request
        //                     return this.customRequest({
        //                         method: error.config.method,
        //                         url: error.config.url,
        //                         data: error.config.data
        //                     })
        //                 } catch (e) {
        //                     // Refresh has failed - reject the original request
        //                     throw error
        //                 }
        //             }
        //         }

        //         // If error was not 401 just reject as is
        //         throw error
        //     }
        // )
    },

    unmount401Interceptor() {
        // Eject the interceptor
        this._ajax.interceptors.response.eject(this._401interceptor)
    },
    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return this._ajax(data)
    }
}

export default ApiService