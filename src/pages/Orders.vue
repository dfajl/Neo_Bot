<template>
	<my-navbar></my-navbar>
	<my-checkBox-filters>
		<div class="inputWrap">
			<label for="allFilters">Вывести все</label>
			<input type="checkbox" id="allFilters" />
		</div>
		<div class="inputWrap">
			<label for="new">Вывести новые</label>
			<input type="checkbox" id="new" />
		</div>
		<div class="inputWrap">
			<label for="postponed">Вывести отложенные</label>
			<input type="checkbox" id="postponed" />
		</div>
		<div class="inputWrap">
			<label for="changed">Вывести отмененные</label>
			<input type="checkbox" id="changed" />
		</div>
	</my-checkBox-filters>
</template>

<script>
	export default {};
</script>

<style lang="scss"></style>
