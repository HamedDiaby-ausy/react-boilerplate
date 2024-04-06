import { fetchRequest } from "@utilities/requests";
import { 
    FetchRequestType, 
    SignInActionPayloadRequest, 
    SignInActionPayloadSuccess,
} from "@utilities/types";

export const fetchSigninRequest = async(
    payload: SignInActionPayloadRequest
):Promise<SignInActionPayloadSuccess>=> {

    const requestConfig: FetchRequestType = {
        route: '/authentificated/signin',
        method: 'POST',
        data: payload,
    };

    try {
        //const response: SignInActionPayloadSuccess = await fetchRequest(requestConfig);
        //unmock
        const response = {
            userIsAuthentificated: true
        };
        return response;
    } catch (error) {
        console.error('Error in fetchSigninRequest:', error);
        throw error;
    }
};
