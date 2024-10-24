export default class Api {
    static async get(url, storeName, constName) {
        return await useFetch(url, {
            method: 'GET',
            onResponse({ request, response, options }) {
                if (constName == 'posts') {
                    storeName().getData(constName, response._data)
                }
                else {
                    storeName().getData(constName, response._data, request.split('/')[4])
                }
            }
        })
    }
}