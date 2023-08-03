<template>
	<v-btn elevation="0" class="mt-4 bgColor">
		<slot></slot>
	</v-btn>
</template>

<script>
	export default {
		name: 'my-main-button',
	};
</script>

<style lang="scss">
	.bgColor {
		background: $mainColor#000;
		background: $mainGradient;
	}
</style>
