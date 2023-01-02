<template>
    <div id="home">
        home
        <p v-if="isDesktop">desktop</p>
        <p v-else>mobile</p>
    </div>
  </template>

<script lang="ts" setup>
const { isDesktop } = useDevice();
</script>