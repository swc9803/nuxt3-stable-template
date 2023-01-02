<template>
	<div>
		<Head>
			<Title>Nuxt3 Template</Title>
			<Meta name="description" content="Nuxt3 Template" />
		</Head>
		<NuxtLayout name="default">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts">
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
