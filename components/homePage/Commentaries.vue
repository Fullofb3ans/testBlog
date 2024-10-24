<template>
    <div class="commentaries__container" v-if="comments">
        <div class="commentaries__count">{{ getCommentaryDeclension(comments.total) }}</div>
        <div class="commentaries" v-if="comments.total !== 0">
            <div class="commentarie" :class="{ hidden: comment.deleted }" v-for="comment in comments.comments" :key="comment.id">
                <div class="commentarie__avatar">
                    <SvgoAvatar filled />
                </div>
                <div class="commentarie__content">
                    <div class="commentarie__content__user">
                        <div class="commentarie__content__user__name">{{ comment.user.username }}</div>
                        <div class="commentarie__content__user__text">{{ comment.body }}</div>
                    </div>
                    <div class="commentarie__group-button">
                        <div class="commentarie__date">Today</div>
                        <div class="commentarie__delete-button" @click="deleteComment(comment)">Удалить</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import routeHandlers from "@/utils/dynamicRouteHandlers";
import { usePostsStore } from "@/store/postsStore";
export default {
    name: "Commentaries",
    props: {
        id: {
            required: true,
        },
    },
    setup(props) {
        const postsStore = usePostsStore();

        onMounted(() => {
            routeHandlers.pushData("POST_COMMENTS", props.id);
        });

        const comments = computed(() => postsStore.getComment[props.id]);

        const countOfDeleted = ref(0);

        const deleteComment = (comment) => {
            comment.deleted = true;
            countOfDeleted.value++;
        };

        const getCommentaryDeclension = (commentsCount) => {
            const count = commentsCount - countOfDeleted.value;
            const lastDigit = count % 10;
            const lastTwoDigits = count % 100;

            if (lastDigit === 1 && lastTwoDigits !== 11) {
                return count + " Комментарий";
            } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
                return count + " Комментария";
            } else {
                return count + " Комментариев";
            }
        };

        return {
            countOfDeleted,
            comments,
            getCommentaryDeclension,
            deleteComment,
        };
    },
};
</script>

<style></style>
