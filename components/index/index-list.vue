<template>
	<view>
		<view class="index-list animated fadeInLeft fast">
			<view class="index-list1 u-f-ac u-f-jsb">
				<!-- 左边个人头像 -->
				<view class="left u-f-ac">
					<image :src="item.userpic" mode=""></image>
					{{ item.username }}
				</view>
				<view class="right u-f-ac" v-show="!isguanzhu" @tap="guanzhu">
					<view class="icon iconfont icon-zengjia"></view>
					关注
				</view>
			</view>

			<view class="index-list2" @tap="opendetail">
				<text>{{ item.title }}</text>
			</view>

			<view class="index-list3 u-f-ajc" @tap="opendetail">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<template v-if="item.type == 'video'">
					<view class="icon iconfont icon-bofang index-list-play"></view>
					<view class="index-list-playinfo">{{ item.playnum }}次播放 {{ item.long }}</view>
				</template>
			</view>

			<view class="index-list4 u-f-ac u-f-jsb">
				<view class="left u-f-ac" >
					<view class="u-f-ac" :class="{ active: infonum.index == 1 }" @tap="caozuo('ding')">
						<view class="icon iconfont icon-icon_xiaolian-mian">
							<text>{{ infonum.dingnum }}</text>
						</view>
					</view>
					<view class="u-f-ac" :class="{ active: infonum.index == 2 }" @tap="caozuo('cai')" >
						<view class="icon iconfont icon-kulian" >
							<text>{{ infonum.cainum }}</text>
						</view>
					</view>
				</view>
				<view class="right u-f-ac">
					<view class="icon iconfont icon-pinglun1">
						<text>{{ item.commentnum }}</text>
					</view>
					<view class="icon iconfont icon-zhuanfa">
						<text>{{ item.commentnum }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isguanzhu: this.isguanzhu,
			infonum:this.item.infonum
		};
	},
	props: {
		item: Object,
		index: Number
	},
	methods: {
		// 进入详情页
		opendetail() {
			// console.log(this.item)
			uni.navigateTo({
				url:'../../pages/detail/detail?detailData='+JSON.stringify(this.item)
			})
		},
		guanzhu() {
			this.isguanzhu = true;
			console.log(this.isguanzhu);
			uni.showToast({
				title: '关注成功'
			});
		},
		
		caozuo(type) {
			switch (type) {
				case 'ding':
					if (this.infonum.index == 1) {
						return;
					}
					this.infonum.dingnum++;
					if (this.infonum.index == 2) {
						this.infonum.cainum--;
					}
					this.infonum.index = 1;
					break;
				case 'cai':
					if (this.infonum.index == 2) {
						return;
					}
					this.infonum.cainum++;
					if (this.infonum.index == 1) {
						this.infonum.dingnum--;
					}
					this.infonum.index = 2;
					break;
			}
		}
	}
};
</script>

<style scoped>
.index-list {
	padding: 20upx;
	border-bottom: 1px solid #f0f0f0;
}
.index-list1 {
	color: #9b9b9b;
}

.index-list1 .left > image {
	width: 85upx;
	height: 85upx;
	border-radius: 100%;
	margin-right: 10upx;
}
.index-list1 .right {
	padding: 0 10upx;
	background-color: #f4f4f4;
	border-radius: 6upx;
}
.index-list2 {
	margin: 15upx 0;
	font-size: 32upx;
}
.index-list3 {
	position: relative;
}
.index-list3 > image {
	width: 100%;
	border-radius: 20upx;
}
.index-list3 .index-list-play {
	position: absolute;
	font-size: 140upx;
	color: #ffffff;
}
.index-list3 .index-list-playinfo {
	position: absolute;
	color: #ffffff;
	background: rgba(51, 51, 51, 0.72);
	bottom: 8upx;
	right: 8upx;
	border-radius: 40upx;
	font-size: 22upx;
	padding: 0 12upx;
}
.index-list4 {
	color: #d5d5d5;
}
.index-list4 .active,
.index-list4 .active > view {
	color: #c5f61c;
}
.index-list4 .left > view:first-child {
	margin-right: 8upx;
}
.index-list4 .left > view > text:first-child {
	padding: 10upx;
}

.index-list4 .right > view:first-child {
	margin-right: 10upx;
}
.index-list4 .right > view > text:first-child {
	padding: 15upx;
}
</style>
