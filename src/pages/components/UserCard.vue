<template>
    <router-link :to="userUrl" class="m-5">
        <div class="card shadow" style="width: 15rem;">
            <img :src="user.picture.large" alt="..." class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-black mb-2">{{ user.name.first }}</h5>
                <p class="text-muted">age: {{ user.dob.age }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['user'],
    computed: {
        userUrl () {
            return '/user/' + this.user.login.uuid;
        }
    }
}
</script>