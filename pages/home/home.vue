<template>
	<view>
		<template v-if="!islogin">
			<!-- 未登陆 -->
			<view class="u-f-ajc">登陆仿糗百，体验更多功能</view>
			<!-- 第三方登录 -->
			<other-login></other-login>
			<!-- 账号密码登录 -->
			<view class="u-f-ajc" @tap="openLogin">
				账号密码登录
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</template>
		<template v-else>
			<home-info :homeinfo="homeinfo"></home-info>
		</template>

		<!-- 数据 -->
		<home-data :homedata="homedata"></home-data>

		<!-- 广告位 -->
		<view class="home-adv u-f-ajc"><image src="../../static/demo/datapic/19.jpg" mode="widthFix" lazy-load></image></view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index"><home-list-item :item="item" :index="index"></home-list-item></block>
		</view>
	</view>
</template>

<script>
import otherLogin from '../../components/home/other-login.vue';
import homeInfo from '../../components/home/home-info.vue';
import homeData from '../../components/home/home-data.vue';
import homeListItem from '../../components/home/home-list-item.vue';
export default {
	components: {
		otherLogin,
		homeInfo,
		homeData,
		homeListItem
	},
	data() {
		return {
			islogin: true,
			homeinfo: {
				userpic: '../../static/demo/userpic/11.jpg',
				username: '昵称',
				totalnum: 0,
				todaynum: 0
			},
			homedata: [{ name: '糗事', num: 0 }, { name: '动态', num: 0 }, { name: '评论', num: 0 }, { name: '收藏', num: 0 }],
			list: [{ icon: 'liulan', name: '浏览历史' }, { icon: 'huiyuanvip', name: '糗百认证' }, { icon: 'keyboard', name: '审核糗事' }]
		};
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			// console.log('跳转设置页');
			uni.navigateTo({
				url:'../user-set/user-set'
			})
		}
	},
	methods: {
		openLogin(){
			uni.navigateTo({
				url: '../login/login',
			});
		}
	}
};
</script>

<style scoped>
.home-adv {
	padding: 20upx;
}
.home-adv image {
	border-radius: 20upx;
	height: 150upx;
}
.home-list {
	padding: 20upx;
}
.home-list > view:first-child {
	border-top: 1upx solid #eeeeee;
}
</style>
