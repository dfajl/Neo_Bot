<template>
	<router-view></router-view>
	//встраиваем сюда все приложение
</template>
<script>
	import MyAuth from '@/pages/Auth.vue';
	export default {
		name: 'App',
		components: { MyAuth },
	};
</script>
<style lang="scss"></style>
