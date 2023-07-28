<template>
	<div class="wrapper">
		<img src="../assets/images/neovox_logo.svg" alt="" />
		<div class="navBar">
			<a> Запуск опроса </a>
			<a> Заказы </a>
			<a> Отчеты </a>
			<a> События </a>
			<a> Квесты </a>
			<a> Товары </a>
			<a> Верификация </a>
			<a> Администрирование </a>
			<a @click="$router.push('/')">
				<span class="mr-1">Выход</span>
				<v-icon size="medium" icon="mdi-exit-to-app"></v-icon>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my-navbar',
	};
</script>

<style lang="scss" scoped>
	.navBar {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		background: $mainColor;
		background: $mainGradient;
	}

	a {
		cursor: pointer;
		transition: 0.3s all;
		color: $navBarText;
		&:hover {
			color: $navBarHover;
		}
		margin-right: 15px;
	}
	img {
		display: block;
		margin-right: 50px;
	}
</style>
