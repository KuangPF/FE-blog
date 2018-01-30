<template>
	<div class="let-const-content">
	</div>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	mounted() {
		this.letInit();
	},
	methods: {
		letInit() {
			let a = 1;
			let update = () => {
				let a = 2;
				console.log('inner function a=' + a);
			};
			update();
			console.log('out function a=' + a);
		}
	}
};
</script>

<style>

</style>
