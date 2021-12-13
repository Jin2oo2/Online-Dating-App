<template>
    <div class="d-flex flex-wrap justify-content-center"> 
        <div v-for="user of users" :key="user.login.uuid" class="d-flex flex-wrap justify-content-center">
            <UserCard :user="user"></UserCard>
        </div>
    </div>
</template>

<script>
import UserCard from './components/UserCard.vue';

export default {
    components: {
        UserCard
    },

    computed: {
        users () {
            return this.$store.state.users.users;
        }
    },   
}
</script>
