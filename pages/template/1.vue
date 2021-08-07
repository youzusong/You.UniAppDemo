<template>
	<AppWrapper>
		<view style="position: fixed; width: 100%;" :style="{opacity: navBarOpacity, top: navBarTop + 'px'}">
			<u-navbar back-text="返回" title="剑未配妥，出门已是江湖" :isFixed="false" :background="{backgroundColor: '#FFFFFF'}"></u-navbar>
		</view>
		<view> 
			<view style="height: 300px; background-color: #007AFF;">222</view>
			<view style="height: 300px; background-color: #FF6600;"></view>
			<view style="height: 300px; background-color: #AA0099;"></view>
		</view> 
	</AppWrapper>
</template>

<script>
	export default {
		data(){
			return {
				navBarTop: -72,
				navBarOpacity: 0
			}
		}, 
		onPageScroll(e){
			const opacity = e.scrollTop / 72
			const top = e.scrollTop - 72
			this.navBarTop = top >= 0 ? 0 : top
			this.navBarOpacity = opacity >= 1 ? 1 : opacity
		},
		
		onBackPress() {
			console.log('xxxx')
		}
	}
</script>

<style>
</style>
