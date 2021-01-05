<template>
	<!-- 数据 -->
	<view class="home-data u-f-ac">
		<block v-for="(item,index) in homedata">
					<view class=" u-f-ajc u-f-column u-f1"> <view>{{item.num}}</view>{{item.name}}</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			homedata:Array
		}
	}
</script>

<style scoped>
	
	.home-data{
		padding: 20upx 40upx;
	}
	.home-data view{
		color: #989898;
	}
	.home-data>view>view{
		font-size: 32upx;
		color: #333333;
	}
</style>
