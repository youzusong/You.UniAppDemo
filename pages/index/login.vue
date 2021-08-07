<template>
	<view>
		<button @click="onBack">返回</button>
	</view>
</template>

<script>
	export default {
		onBackPress(e) {
			console.log(e)
		},
		
		methods: {
			onBack(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
</style>
