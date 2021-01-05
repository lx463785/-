<template>
	<view>
		<view class="common-list u-f">
			<view class="common-list-left"><image :src="item.userpic" lazy-load mode="widthFix"></image></view>
			<!-- 右边 -->
			<view class="common-list-right">
				<view >
					<view class="u-f-ac u-f-jsb ">
						<view class="u-f-ac">
							{{ item.username }}
								<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
						</view>
						<view v-show="!isguanzhu" class="icon iconfont icon-zengjia" @tap="guanzhu" >关注</view>
					</view>
					<view class="common-list-r-time">26天前</view>
				</view>
		
				<view>{{ item.title }}</view>
				<view class="u-f-ajc">
					<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
					<!-- 视频 -->
					<template v-if="item.video">
						<view class="common-list-play icon iconfont icon-bofang"></view>
						<!-- 播放信息 -->
						<view class="common-list-playinfo">{{ item.video.looknum }} 次播放 {{ item.video.long }}</view>
					</template>

					<!-- 分享 -->
					<view class="common-list-share u-f-ac" v-if="item.share">
						<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
						<view>{{ item.share.title }}</view>
					</view>
				</view>
				<view class="u-f-ac u-f-jsb">
					<view>{{ item.path }}</view>
					<view class="u-f-ac">
						<view class="icon iconfont icon-zhuanfa">{{ item.sharenum }}</view>
						<view class="icon iconfont icon-pinglun1">{{ item.commentnum }}</view>
						<view class="icon iconfont icon-dianzan1">{{ item.goodnum }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "../common/tag-sex-age.vue"
	export default {
		components:{
			tagSexAge
		},
	data() {
		return {
			isguanzhu: this.item.isguanzhu
		};
	},
	props:{
		item:Object,
		index:Number
	},
	methods: {
			guanzhu(){
		
						this.isguanzhu=true;
						uni.showToast({
							title: '关注成功',
						});
						this.$emit('isguanzhu',this.index);
					}
	}
};
</script>

<style scoped>
@import '../../common/list.css';

	.common-list-right > view:nth-child(1)>view:nth-child(1) > view:first-child {
		color: #999999;
		font-size: 32upx;
	}

	.common-list-right > view:nth-child(1)>view:nth-child(1) > view:last-child {
		font-size: 32upx;
		padding: 0 10upx;
		background-color: #eeeeee;
	}
	.common-list-r-time {
		background: #FFFFFF !important;
		color: #CECECE;
		font-size: 26upx;
	}
</style>
