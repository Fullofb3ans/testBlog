<template>
    <div class="blog__content" v-if="posts.length">
        <PostPreview v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import PostPreview from "@/components/homePage/PostPreview.vue";

import { usePostsStore } from "@/store/postsStore";
export default {
    name: "home-page",
    components: {
        PostPreview,
    },
    setup() {
        useHead({
            title: "blog | ikakprosto",
        });
        const postsStore = usePostsStore();

        return {
            posts: computed(() => postsStore.getFivePosts),
        };
    },
};
</script>
