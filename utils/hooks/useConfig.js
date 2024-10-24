import { useRuntimeConfig } from '#app'

export function useConfig() {
    const config = useRuntimeConfig().public
    return config
}