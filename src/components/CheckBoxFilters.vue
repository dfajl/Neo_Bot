<template>
	<div class="mainWrapper">
		<div class="checkBoxWrapper">
			<div class="spanWrap">
				<span>Фильтры</span>
			</div>
			<slot>
				<div class="inputWrap">
					<label for="allFilters">Вывести все</label>
					<input type="checkbox" id="allFilters" />
				</div>
				<div class="inputWrap">
					<label for="onlyActive">Только активные</label>
					<input type="checkbox" id="onlyActive" />
				</div>

				<div>
					<select>
						<option disabled selected>Выбрать площадку</option>
						<option>Волгоград</option>
						<option>Астрахань</option>
						<option>Москва</option>
					</select>
				</div>
			</slot>
		</div>
		<my-main-button>
			Добавить поле
			<span style="margin-left: 7px" class="mdi mdi-plus-circle"></span>
		</my-main-button>
	</div>
</template>

<script>
	export default {
		name: 'my-checkBox-filters',
	};
</script>

<style lang="scss">
	.mainWrapper {
		padding-left: 20px;
		padding-right: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.checkBoxWrapper {
		border-radius: 1%;
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		background: $mainColor;
		background: $mainGradient;
		width: 20%;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		span {
			display: block;
			font-weight: 600;
			margin-bottom: 10px;
		}

		select {
			cursor: pointer;
			transition: 0.2s linear;
			width: 75%;
			border: 1px solid black;
			border-radius: 2px;
			padding: 0 2px;
			&:hover {
				background: rgba(224, 224, 224, 0.299);
			}
		}
		.inputWrap {
			display: flex;
			align-items: center;
			label {
				margin-right: 7px;
			}
			input {
				cursor: pointer;
			}
		}
	}
</style>
