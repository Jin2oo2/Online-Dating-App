<template>
    <router-link :to="messageLink">
        <div class="d-flex mb-2">
            <img :src="user.picture.thumbnail" class="rounded-circle me-2" alt="...">
            <div>
                <p class="text-black">{{ lastMessage }}</p>
                <p class="text-muted">2021/8/27 17:31:16</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['id'],

    computed: {
        user () {
            return this.$store.getters.getUserById(this.id);
        },

        lastMessage () {
            let messages = this.$store.state.messages.messages[this.id]
            return messages[messages.length-1];
        },

        messageLink () {
            return '/user/' + this.id + '/chat';
        }
    }

}
</script>