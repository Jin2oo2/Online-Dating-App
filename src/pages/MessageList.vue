<template>
    <div class="ms-1 p-2">
        <div v-for="id in messageIds" :key="id">
            <LastMessage :id="id"></LastMessage>
        </div>
    </div>
</template>

<script>
import LastMessage from './components/LastMessage.vue'

export default {
    components: {
        LastMessage
    },

    computed: {
        messageIds () {
            return Object.keys(this.$store.state.messages.messages);
        },
    }
}
</script>