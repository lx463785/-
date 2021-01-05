<template>
	<view class="">
		<view class="load-more">{{ loadtext }}</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		props:{
			loadtext:String
		}
	}
</script>
	
<style>
	.load-more {
		background: #eeeeee;
		color: #aaaaaa;
		padding: 15upx;
		font-size: 24upx;
		text-align: center;
	}
</style>
