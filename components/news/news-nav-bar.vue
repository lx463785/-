<template>
	<view>
		<uni-nav-bar :statusBar="true" :shadow="false" @clickRight="openAdd">
			<!-- 左边签到按钮 -->
			<block solt="left">
				<view class="nav-left"><view class="icon iconfont icon-qiandao"></view></view>
			</block>

			<!-- 中间关注和话题 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab, index) in tabBars" :key="tab.id">
					<view class="u-f-ajc" :class="{ active: tabIndex == index }" @tap="changeTab(index)">
						{{ tab.name }}
						<view v-if="tabIndex == index" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>

			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc"><view class="icon iconfont icon-bianji1"></view></view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
export default {
	data() {
		return {};
	},
		components:{
				uniNavBar
			},
	props: {
		tabBars: Array,
		tabIndex: Number
	},
	methods: {
		changeTab(index) {
			this.$emit('change-tab',index);
		},
		openAdd() {
			uni.navigateTo({
				url: '../add-input/add-input'
			});
		}
	}
};
</script>

<style scoped>
.nav-left {
	/* border: 1upx solid; */
	margin-left: -130upx;
}
.nav-left > view,
.nav-right > view {
	font-size: 42upx;
}
.nav-left > view {
	color: #ff971b;
}
.nav-tab-bar {
	/* border: 1upx solid; */
	margin-left: 200upx;
	position: relative;
}
.nav-tab-bar > view {
	color: #969696;
	font-size: 32upx;
	font-weight: bold;
	padding: 6upx 15upx;
	/* border: 1upx solid; */
}
.nav-right {
	/* border: 1upx solid; */
	font-weight: bold;
	margin-left: 16upx;
}
.nav-right > view {
	color: #333333;
}
.active {
	color: #333333 !important;
}
.nav-tab-bar-line {
	border-bottom: 5upx solid #fede33;
	border-top: 5upx solid #fede33;
	border-radius: 20upx;
	position: absolute;
	width: 70upx;
	bottom: 0upx;
}
</style>
