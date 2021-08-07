<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="u-status-bar"></view>
		<!-- #endif -->
		<slot />
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	.u-status-bar{
		background-color: #F0AD4E;
		width: 100%;
		height: var(--status-bar-height);
	}
</style>
