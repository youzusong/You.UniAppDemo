<template>
	<view>
		<view v-for="item in infoArr" :key="item.key">
			<view>{{item.key}}</view>
			<view>{{item.value}}</view>
			<view style="height: 2px; background-color: #007AFF;"></view>
		</view>
	</view>
</template>

<script> 
	export default {
		data(){
			const info = uni.getSystemInfoSync()
			const infoArr = []
			Object.keys(info).forEach(x => {
				infoArr.push({
					key: x,
					value: info[x]
				})
			})
			
			return {
				infoArr
			}
		}
	}
</script>

<style>
</style>
