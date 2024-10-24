<template>
    <div class="post__container" v-if="post">
        <div class="post">
            <div class="post__title">
                <h1>{{ post.title }}</h1>
            </div>
            <div class="post__description">
                <p>
                    {{ post.body }}
                </p>
            </div>
            <div class="post__group-buttons">
                <div class="post__reaction__container">
                    <div class="post__reaction__wrapper post__reaction__wrapper__likes" :class="{ 'post__reaction__wrapper__likes--active': liked }" @click="handleReaction('like')">
                        <div v-if="!liked" class="post__reaction__icon"><SvgoLike /></div>
                        <div v-else class="post__reaction__icon"><SvgoLikeActive filled /></div>
                        <div class="post__reaction__text">Like</div>
                        <div class="post__reaction__number">{{ liked ? post.reactions.likes + 1 : post.reactions.likes }}</div>
                    </div>
                    <div class="post__reaction__wrapper post__reaction__wrapper__dislikes" :class="{ 'post__reaction__wrapper__dislikes--active': disliked }" @click="handleReaction('dislike')">
                        <div v-if="!disliked" class="post__reaction__icon"><SvgoDislike filled /></div>
                        <div v-else class="post__reaction__icon"><SvgoDislikeActive filled /></div>
                        <div class="post__reaction__text">Trash</div>
                        <div class="post__reaction__number">{{ disliked ? post.reactions.dislikes + 1 : post.reactions.dislikes }}</div>
                    </div>
                </div>
                <div class="post__open-comments__button">
                    <div class="post__open-comments__button__text" @click="commentsIsVisible = !commentsIsVisible">Open comments</div>
                </div>
                <div class="post__date">
                    <div class="post__date__text">Today</div>
                </div>
                <div class="post__tags__group">
                    <div class="post__tags__group__tag" v-for="(tag, index) in post.tags" :key="'tag' + index">
                        <div class="post__tags__group__tag__text">{{ tag }}</div>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="slide">
            <Commentaries v-if="commentsIsVisible" :id="post.id" />
        </Transition>
    </div>
</template>
<script>
import Commentaries from "@/components/homePage/Commentaries.vue";
export default {
    name: "PostPreview",
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    components: {
        Commentaries,
    },
    setup() {
        const liked = ref(false);
        const disliked = ref(false);
        const commentsIsVisible = ref(false);
        const handleReaction = (use) => {
            if (use === "like") {
                liked.value = !liked.value;
                if (liked.value) {
                    disliked.value = false;
                }
            } else {
                disliked.value = !disliked.value;
                if (disliked.value) {
                    liked.value = false;
                }
            }
        };
        return {
            liked,
            disliked,
            handleReaction,
            commentsIsVisible,
        };
    },
};
</script>
