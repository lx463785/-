<template>
	<view>
		<!-- 登录 -->
		<view class="home-info u-f-ac" @tap="openUserSpace">
			<image :src="homeinfo.userpic" mode="widthFix" lazy-load></image>
			<view class="">
				<!-- 昵称 -->
				<view >{{homeinfo.username}}</view>
				<!-- 访客 -->
				<view >总访客 {{homeinfo.totalnum}} 今日 {{homeinfo.todaynum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			homeinfo:Object
		},
		methods:{
			openUserSpace(){
				uni.navigateTo({
					url: '../../pages/user-space/user-space'
				});
			}
		}
	}
</script>

<style scoped>
	.home-info{
		padding: 20upx 40upx;
	}
	.home-info image{
		flex-shrink: 0;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 15upx;
	}
	.home-info view:first-of-type>view:first-child{
		font-size: 32upx;
	}
	.home-info view:first-of-type>view:last-child{
		color: #BBBBBB;
	}
	.home-info>view:last-of-type{
		height: 100%;
	}
	
</style>
