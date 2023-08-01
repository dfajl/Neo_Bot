<template>
	<my-navbar></my-navbar>
	<div class="buttonLinksWrapper">
		<div class="buttonColumn" @click="goAnotherPage($event.target)">
			<v-btn
				elevation="24"
				data-btn-header="true"
				class="mt-1 bgColor font-weight-bold cursor"
			>
				Контроль геймификации
			</v-btn>
			<v-btn data-btn-name="quests" elevation="2" class="mt-8 bgColor">
				Квесты
			</v-btn>
			<v-btn data-btn-name="goods" elevation="2" class="mt-6 bgColor">
				Товары
			</v-btn>
			<v-btn
				data-btn-name="verification"
				elevation="2"
				class="mt-6 bgColor"
			>
				Верификация
			</v-btn>
			<v-btn
				data-btn-name="administration"
				elevation="2"
				class="mt-6 bgColor"
			>
				Администрирование
			</v-btn>
		</div>
		<div class="imgWrapper">
			<img src="../assets/images/bot_and_neo.png" alt="" />
		</div>
		<div class="buttonColumn" @click="goAnotherPage($event.target)">
			<v-btn
				elevation="24"
				class="mt-1 bgColor font-weight-bold cursor"
				data-btn-header="true"
			>
				Администрирование бота
			</v-btn>
			<v-btn
				data-btn-name="startQuiz"
				elevation="2"
				class="mt-8 bgColor w-20"
			>
				Запуск опроса
			</v-btn>
			<v-btn data-btn-name="orders" elevation="2" class="mt-6 bgColor">
				Заказы
			</v-btn>
			<v-btn data-btn-name="reports" elevation="2" class="mt-6 bgColor">
				Отчеты
			</v-btn>
			<v-btn data-btn-name="events" elevation="2" class="mt-6 bgColor">
				События
			</v-btn>
		</div>
	</div>
</template>

<script>
	//import MyNavbar from '@/components/Navbar.vue';
	export default {
		/* components: {
			MyNavbar,
		} */
		name: 'my-main',
		methods: {
			goAnotherPage(target) {
				/* 
					делегирование события клика на дочерние компоненты в колонках с кнопками div class="buttonColumn" 
				*/
				const targetInnerText = target.innerText;

				let isColumnHeader;
				switch (targetInnerText) {
					case 'АДМИНИСТРИРОВАНИЕ БОТА':
					case 'КОНТРОЛЬ ГЕЙМИФИКАЦИИ':
						isColumnHeader = true;
						break;
				}

				if (!isColumnHeader) {
					const route =
						target.dataset.btnName ||
						target.parentElement.dataset.btnName;
					this.$router.push(`/${route}`);
				}
			},
		},
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
		.cursor {
			cursor: none;
		}
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
