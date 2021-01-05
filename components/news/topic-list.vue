<template>
		<view class="topic-list u-f animated fadeInLeft fast" @tap="openTopicDetail">
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<view>
				<view>#{{item.title}}#</view>
				<view>{{item.desc}}</view>
				<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			
			openTopicDetail(){
				uni.navigateTo({
					url:'../topic-detail/topic-detail'
				})
			}
		}
	}
</script>

<style scoped>

	.topic-list{
		border-bottom: 1upx solid #EEEEEE;
		padding: 20upx 0;
		
	}
	.topic-list>image{
		width: 180upx;
		height: 180upx;
		border-radius: 10upx;
	
	}
	.topic-list>view{
		margin-left: 20upx;
		
	}
	.topic-list>view view:first-child{
		font-size:32upx ;
	}
	.topic-list>view view:not(:first-child){
		font-size: 28upx;
		color: 	#ADADAD;
	}
	
</style>
