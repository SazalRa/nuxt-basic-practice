<script setup>
import { useNuxtApp } from 'nuxt/app';
import { useRoute } from 'vue-router';

const nuxt = useNuxtApp();


const route = new useRoute();
console.log(route.params.id);

</script>
<template>
    <div>event id: {{  $route.params.id }}</div>
</template>