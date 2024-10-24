import { usePostsStore } from '~/store/postsStore'
import { useConfig } from '@/utils/hooks/useConfig'

export const getDynamicApiConstants = () => {
    const config = useConfig()

    return {
        POSTS: { url: `${config.API}/posts`, store: () => usePostsStore(), constName: 'posts' },
        POST_COMMENTS: { url: `${config.API}/posts`, store: () => usePostsStore(), constName: 'comments' },
    }
}