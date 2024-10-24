import { getDynamicApiConstants } from '~/utils/dynamicApiConstants'

export default class routeHandlers {
    static async pushData(name, param = '') {
        const DYNAMIC_API_CONSTANTS = getDynamicApiConstants();
        const { url, store, constName } = DYNAMIC_API_CONSTANTS[name];
        const fullUrl = constName == 'comments' ? `${url}/${param}/comments` : url;

        return Api.get(fullUrl, store, constName);
    }

}