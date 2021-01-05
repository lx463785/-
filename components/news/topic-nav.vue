<template>
	<view class="hot-type">
		<!-- top -->
		<view class="type-top u-f-ac u-f-jsb">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="openManyType">
				<view>更多</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
	
		</view>
		<!-- 热门选项 -->
		<view class="type-title u-f" >
			<view  v-for="(item,index) in topic" :key="index">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			topic:Array
		},
		methods:{
			openManyType(){
				uni.navigateTo({
					url:'../../pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style scoped>
	.hot-type{
		padding: 0 20upx;
	}
	.type-top>view:first-child{
		color: #464646;
		font-size: 32upx;
	}
	.type-top>view:last-child view{
		color: #D7D7D7;
		font-size: 32upx;
	/* 	background-color: red; */
	}
	.type-title{
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
			border-bottom: 1upx solid #EEEEEE;
	}
	.type-title>view{
		flex: 1;
		background-color: #F7F7F7;
		margin:0 10upx;
		text-align: center;
		font-size: 32upx;
		color: #9E9E9E;
		border-radius: 10upx;
		
	}
</style>
