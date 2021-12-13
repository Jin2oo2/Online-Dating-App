<template>
    <div class="vh-100 p-5 d-flex justify-content-center">
        <div id="messageArea" class="bg-white col-10 vh-70 shadow">    
            <div id="messageView" class="h-100 p-3 overflow-auto">
                <div v-for="(message, index) in messages" :key="index">
                    <MessageCard :message="message" :thumbnail="user.picture.thumbnail"></MessageCard>
                </div>
            </div>

            <div class="bg-white input-group p-3 mb-3 shadow">
                <input type="text" class="form-control" placeholder="new message" v-model="newMessage" v-on:keyup.enter="sendMessage">
                <button class="btn btn-outline-secondary" type="button" @click="sendMessage">send</button>
            </div>
        </div>
    </div>
</template>

<script>
import MessageCard from './components/MessageCard.vue';

export default {
    data () {
        return {
            newMessage: ''
        }
    },

    components:{
        MessageCard
    },

    methods: {
      sendMessage () {
          if(this.newMessage == '') return;
          this.$store.commit('setMessages', {id: this.$route.params.id, messages: this.newMessage})
          this.newMessage = '';
      } 
    },

    computed: {
        user () {
            return this.$store.getters.getUserById(this.$route.params.id)
        },

        messages () {
            return this.$store.getters.getMessagesById(this.$route.params.id);
        }
    }
}
</script>

<style scoped>
.vh-60 {
    height: 60vh;
}

.vh-70 {
    height: 70vh;
}
</style>