import ApiService from "./api.service";
import TokenService from "./storage.service";

class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errorCode = errorCode;
    }
}


const AuthService = {

    /**
       * Refresh the access token.
       **/
    refreshToken: async function () {
        const refreshToken = TokenService.getRefreshToken();

        const requestData = {
            method: "post",
            url: "/o/token/",
            data: {
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            },
            auth: {
                username: process.env.VUE_APP_CLIENT_ID,
                password: process.env.VUE_APP_CLIENT_SECRET,
            },
        };

        try {
            const response = await ApiService.customRequest(requestData);

            TokenService.saveToken(response.data.access_token);
            TokenService.saveRefreshToken(response.data.refresh_token);
            // Update the header in ApiService
            ApiService.setHeader();

            return response.data.access_token;
        } catch (error) {
            throw new AuthenticationError(
                error.response.status,
                error.response.data.detail
            );
        }
    }

};

export default AuthService;

export { AuthService, AuthenticationError };
