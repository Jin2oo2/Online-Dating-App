<template>
    <table class="table col-6 d-flex justify-content-center">
        <tbody>
            <tr>
                <td>
                    <img :src="user.picture.large" alt="..." style="width: 16rem;">
                </td>
            </tr>

            <tr>
                <td>
                    <router-link :to="'/user/' + $route.params.id + '/chat'">
                        <button class="btn btn-secondary" type="button">Message</button>
                    </router-link>
                </td>
            </tr>

            <tr>
                <td>Name</td>
                <td>{{ user.name.first}}</td>
            </tr>

            <tr>
                <td>Gender</td>
                <td>{{ user.gender }}</td>
            </tr>

            <tr>
                <td>Age</td>
                <td>{{ user.dob.age}}</td>
            </tr>

            <tr>
                <td>Country</td>
                <td>{{ user.location.country}}</td>
            </tr>

            <tr>
                <td>State</td>
                <td>{{ user.location.state}}</td>
            </tr>

            <tr>
                <td>City</td>
                <td>{{ user.location.city}}</td>
            </tr>

            <tr>
                <td>Email</td>
                <td>{{ user.email}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.getters.getUserById(this.$route.params.id);
        }
    }
}
</script>