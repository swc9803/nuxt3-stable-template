<template>
	<div class="layout">
		<Header />
		<main class="page">
            <h1>default layout</h1>
            <slot />
		</main>

        
	</div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped></style>
