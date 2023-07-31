<template>
	<div class="wrapper">
		<img src="../assets/images/neovox_logo.svg" alt="" />
		<div class="navBar" @click="goAnotherPage($event.target)">
			<a data-anchor-name="startQuiz"> Запуск опроса </a>
			<a data-anchor-name="orders"> Заказы </a>
			<a data-anchor-name="reports"> Отчеты </a>
			<a data-anchor-name="events"> События </a>
			<a data-anchor-name="quests"> Квесты </a>
			<a data-anchor-name="goods"> Товары </a>
			<a data-anchor-name="verification"> Верификация </a>
			<a data-anchor-name="administration"> Администрирование </a>
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
		methods: {
			goAnotherPage(target) {
				/* 
					делегирование события клика на дочерние компоненты в навигационном меню 
				*/

				const element = target.closest('[data-anchor-name]');
				console.dir(element);

				if (element) {
					const route = target.dataset.anchorName;
					this.$router.push(`/${route}`);
				}
			},
		},
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
