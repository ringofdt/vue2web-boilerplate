import ApiService from './api.service'

const AppService = {
    _srvPath: '/x',
    ping: async function () {
        const requestData = {
            method: 'GET',
            url: this._srvPath + "/ping",
        }
        console.debug(requestData)
        return await ApiService.customRequest(requestData)
            .then((response) => {
                return response.data
            }).catch((e) => {
                throw e
            })
    },
}

export default AppService

export { AppService }