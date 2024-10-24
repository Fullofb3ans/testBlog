export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', async () => {
        dynamicRouteHandlers.pushData('POSTS');
    })

});
