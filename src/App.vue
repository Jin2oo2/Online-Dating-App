<template>
  <div>
    <h1 class="mb-2">Online Dating App</h1>
    <div class="col-12 d-flex justify-content-between">
      <router-link to="/" class="ms-2">Home</router-link>
      <router-link to="/message-list" class="me-2">Message</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>