<template>
	<div class="mainWrapper">
		<img src="../assets/images/neovox_logo.svg" alt="" />
		<div class="inputWrapper">
			<v-text-field
				label="Логин"
				hide-details="auto"
				color="red"
			></v-text-field>

			<v-text-field
				class="mt-3"
				color="red"
				:append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
				@click:append-inner="show = !show"
				v-model="password"
				:type="show ? 'text' : 'password'"
				label="Пароль"
			></v-text-field>
		</div>
		<v-btn @click="$router.push('/main')">
			Войти <span class="mdi mdi-location-enter"></span
		></v-btn>
		<div class="progressBarWrapper" v-if="false">
			<span style="color: brown">Connecting...</span>
			<v-progress-circular
				class="ml-2"
				:size="20"
				:width="2"
				indeterminate
				color="red"
			></v-progress-circular>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		name: 'my-auth',
		data() {
			return {
				show: true,
				password: '',
			};
		},
	};
</script>

<style lang="scss">
	.mainWrapper {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.inputWrapper {
		width: 40%;
		margin-top: 50px;
	}
	.progressBarWrapper {
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
	}
</style>
