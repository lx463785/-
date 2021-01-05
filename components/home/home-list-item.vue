<template>
	<view>
	
			<view class="home-list-item u-f-ac u-f-jsb" hover-class="home-list-hover" @tap="clickevent">
				<view class="u-f-ac">
					<view class="icon iconfont" :class="['icon-'+item.icon]"></view>
					{{item.name}}
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
	</view>
</template>

<script>
export default {
	props: {
		item: Object,
		index:Number
	},
	methods:{
		clickevent(){
			// console.log(this.item)
				switch (this.item.clicktype){
								case "navigateTo":
								if(this.item.url){ uni.navigateTo({ url:this.item.url}); }
									break;
								case "switchTab":
								if(this.item.url){ uni.switchTab({url:this.item.url}) }
									break;
								case 'clear':
									uni.showModal({
										title: '提示',
										content: '是否清除缓存',
										confirmText: '立即清除',
										success: res => {
											if(res.confirm){
												uni.clearStorage();
												uni.showToast({
													title:"清除缓存成功"
												})
											}
										},
										fail: () => {},
										complete: () => {}
									});
							}
		}
	}
};
</script>

<style scoped>
.home-list-item {
	padding: 20upx;
	
	border-bottom: 1upx solid #eeeeee;
}
.home-list-item > view:first-child {
	color: #333333;
}
.home-list-item > view:first-child > view {
	margin-right: 10upx;
	color: #66c1ff;
}
.home-list-item > view:last-child {
	color: #cccccc;
}
.home-list-hover {
	background: #f4f4f4;
}
</style>
