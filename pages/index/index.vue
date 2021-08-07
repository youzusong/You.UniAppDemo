<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<button @click="onTest">测试</button>
			<button @click="onToNewsPage">新聞1111</button>
		</view>
		
		<u-cell-group>
			<u-cell-item title="system info" @click="onToSystemInfo"></u-cell-item>
			<u-cell-item title="template 1" @click="onToTemplate(1)"></u-cell-item>
		</u-cell-group>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: false
			}
		},
		
		methods: {
			onTest(){
				this.show = true
				return
				this.$Router.push({
					path: '/xxxxx'
				})
			},
			
			onToNewsPage(){
				this.$Router.push({
					name: 'NewsDetail',
					params: {
						id: '123'
					}
				})
			},
			
			onToSystemInfo(){
				this.$Router.push({
					name: 'SysInfo'
				})
			},
			
			onToTemplate(index){
				this.$Router.push({
					name: `Template${index}`
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
