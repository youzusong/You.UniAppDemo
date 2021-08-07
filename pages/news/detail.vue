<template>
	<view>
		<u-navbar :immersive="true" title="剑未配妥，出门已是江湖">
			<template slot="right">
				<text>xx</text>
			</template>
		</u-navbar>
		<view>news - detail - {{id}} </view>
		<view style="height: 500px; background-color: #2C405A;"></view>
		<view style="height: 500px; background-color: #FF6600;"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				id: null
			}
		},
		onLoad(...options){
			console.log(options)
			console.log(this.$Route)
			
			const { id } = this.$Route.query
			this.id = id
		},
		
		methods: {
			
		}
	}
</script>

<style>
</style>
