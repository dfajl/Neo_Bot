<template>
	<my-navbar></my-navbar>
	<div class="buttonLinksWrapper">
		<div class="buttonColumn">
			<v-btn
				@click="$router.push('/main')"
				elevation="24"
				class="mt-1 bgColor font-weight-bold"
			>
				Контроль геймификации
			</v-btn>
			<v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-8 bgColor"
			>
				Квесты </v-btn
			><v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-6 bgColor"
			>
				Товары </v-btn
			><v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-6 bgColor"
			>
				Верификация </v-btn
			><v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-6 bgColor"
			>
				Администрирование
			</v-btn>
		</div>
		<div class="imgWrapper">
			<img src="../assets/images/bot_and_neo.png" alt="" />
		</div>
		<div class="buttonColumn">
			<v-btn
				@click="$router.push('/main')"
				elevation="24"
				class="mt-1 bgColor font-weight-bold"
			>
				Администрирование бота
			</v-btn>
			<v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-8 bgColor w-20"
			>
				Запуск опроса
			</v-btn>
			<v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-6 bgColor"
			>
				Заказы
			</v-btn>
			<v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-6 bgColor"
			>
				Отчеты
			</v-btn>
			<v-btn
				@click="$router.push('/main')"
				elevation="2"
				class="mt-6 bgColor"
			>
				События
			</v-btn>
		</div>
	</div>
</template>

<script>
	import MyNavbar from '@/components/Navbar.vue';
	export default {
		components: {
			MyNavbar,
		},
		name: 'my-main',
	};
</script>

<style lang="scss" scoped>
	.buttonLinksWrapper {
		display: flex;
		justify-content: center;
		margin: 100px auto;
	}
	.buttonColumn {
		width: 23%;
		display: flex;
		flex-direction: column;
	}
	.bgColor {
		background: $mainColor#000;
		background: $mainGradient;
	}
	.imgWrapper {
		margin-left: 40px;
		margin-right: 40px;
		width: 30%;
		img {
			width: 80%;
			display: block;
			margin: 50px auto;
		}
	}
</style>
