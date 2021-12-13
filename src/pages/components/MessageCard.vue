<template>
    <div>
        <div class="d-flex justify-content-end">
            <div class="me-2 text-end">
                <p>{{ message }}</p>
                <p class="text-muted">2021/8/27 17:31:16</p>
            </div>
            <img src="https://randomuser.me/api/portraits/thumb/men/24.jpg" class="rounded-circle me-2" alt="...">
        </div>

        <div class="d-flex">
            <img :src="thumbnail" class="rounded-circle me-2" alt="...">
            <div class="">
                <p>Hello</p>
                <p class="text-muted">2021/8/27 17:31:16</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message', 'thumbnail'],
}
</script>