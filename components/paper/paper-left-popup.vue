<template>
	<view>
		<!-- 操作菜单 -->
		<view class="papar-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="papar-left-popup" v-show="show">
			<view class="u-f-ac" hover-class="papar-left-popup-h" @tap="addfriend">
				<view class="icon iconfont icon-sousuo"></view> 
				加糗友
			</view>
			<view class="u-f-ac" hover-class="papar-left-popup-h" @tap="clear">
				<view class="icon iconfont icon-qingchu"></view> 
				清除缓存
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		methods:{
			hidepopup(){
							this.$emit('hide');
						},
						addfriend(){
							this.$emit('addfriend');
						},
						clear(){
							this.$emit('clear');
						}
		}
	}
</script>

<style scoped>
	.papar-left-popup-mask{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 199;
	/* 	background: red; */
	}
	.papar-left-popup{
		position: fixed;
	    top: 10upx;
		right: 0;
		background-color: #FFFFFF;
		z-index: 2000;
		width: 50%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
		
	}
	.papar-left-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.papar-left-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
	}
	.papar-left-popup-h{
		background: #EEEEEE;
	}
</style>
