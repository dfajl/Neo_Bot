<template>
	<my-navbar></my-navbar>
	<div class="buttonLinksWrapper">
		<div class="buttonColumn" @click="goAnotherPage($event.target)">
			<v-btn
				elevation="24"
				data-btn-header="true"
				class="mt-1 mb-4 bgColor font-weight-bold cursor"
			>
				Контроль геймификации
			</v-btn>
			<my-main-button data-btn-name="quests"> Квесты </my-main-button>
			<my-main-button data-btn-name="goods"> Товары </my-main-button>
			<my-main-button data-btn-name="verification">
				Верификация
			</my-main-button>
			<my-main-button data-btn-name="administration">
				Администрирование
			</my-main-button>
		</div>
		<div class="imgWrapper">
			<img src="../assets/images/bot_and_neo.png" alt="Neo_and_Bot" />
		</div>
		<div class="buttonColumn" @click="goAnotherPage($event.target)">
			<v-btn
				elevation="24"
				class="mt-1 mb-4 bgColor font-weight-bold cursor"
				data-btn-header="true"
			>
				Администрирование бота
			</v-btn>
			<my-main-button data-btn-name="startQuiz">
				Запуск опроса
			</my-main-button>
			<my-main-button data-btn-name="orders"> Заказы </my-main-button>
			<my-main-button data-btn-name="reports"> Отчеты </my-main-button>
			<my-main-button data-btn-name="events"> События </my-main-button>
		</div>
	</div>
</template>

<script>
	export default {
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
