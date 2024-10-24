import { defineStore } from "pinia";

export const usePostsStore = defineStore('postsStore', {
    state: () => ({
        posts: [],
        comments: {},
    }),

    actions: {
        getData(constName, data, param = '') {
            if (constName == 'posts') {
                this.posts = data.posts;
            }
            else if (constName == 'comments') {
                if (!this.comments[param]) {
                    this.comments[param] = data;
                }
            }
        },
    },
    getters: {
        getPosts: (state) => state.posts,
        getFivePosts: (state) => state.posts.slice(0, 5),
        getComment: (state) => state.comments,
    }
});
