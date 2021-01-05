<template>
	<view class="tabs">
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{ height: swiperheight + 'px' }" :current="tabIndex" @change="tabChange">
				
				<swiper-item v-for="(item1, index1) in newslist" :key="index1">
						<scroll-view scroll-y class="list" @scrolltolower="loadmore(index1)">
							<template v-if="item1.list.length>0">
					
							<block v-for="(item, index) in item1.list" :key="index"><index-list :item="item" :index="index"></index-list></block>			
							<load-more :loadtext="item1.loadtext"></load-more>
							</template>
							
							<template v-else>
								<no-thing></no-thing>
							</template>
						</scroll-view>
					
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import swiperTabHead from '../../components/index/swiper-tab-head';
import indexList from '../../components/index/index-list.vue';
import noThing from '../../components/index/no-thing.vue';
import loadMore from "../../components/common/load-more.vue";
export default {
	components: {
		indexList,
		swiperTabHead,
		noThing,
		loadMore
	},
	data() {
		return {
			tabIndex: 0,
			swiperheight: 1000,
			tabBars: [
				{ name: '关注', id: 'guanzhu' },
				{ name: '推荐', id: 'tuijian' },
				{ name: '体育', id: 'tiyu' },
				{ name: '热点', id: 'redian' },
				{ name: '财经', id: 'caijing' },
				{ name: '娱乐', id: 'yule' }
			],
			newslist: [
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 0, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: true,
							title: '我是标题',
							type: 'video', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playnum: '20w',
							long: '2:47',
							infonum: {
								index: 1, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 0, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: true,
							title: '我是标题',
							type: 'video', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playnum: '20w',
							long: '2:47',
							infonum: {
								index: 1, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 0, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: true,
							title: '我是标题',
							type: 'video', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playnum: '20w',
							long: '2:47',
							infonum: {
								index: 1, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 0, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: true,
							title: '我是标题',
							type: 'video', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playnum: '20w',
							long: '2:47',
							infonum: {
								index: 1, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: false,
							title: '我是标题',
							type: 'img', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								index: 0, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						},
						{
							userpic: '../../static/demo/userpic/12.jpg',
							username: '昵称',
							isguanzhu: true,
							title: '我是标题',
							type: 'video', // img:图文,video:视频
							titlepic: '../../static/demo/datapic/11.jpg',
							playnum: '20w',
							long: '2:47',
							infonum: {
								index: 1, //0:没有操作，1:顶,2:踩；
								dingnum: 11,
								cainum: 11
							},
							commentnum: 10,
							sharenum: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: []
				},
				{
					loadtext: '上拉加载更多',
					list: []
				},
				{
					loadtext: '上拉加载更多',
					list: []
				}
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				// console.log(res.screenHeight)
				// console.log(res.windowHeight);
				let height = res.windowHeight - uni.upx2px(100);
				// console.log(height)
				this.swiperheight = height;
			}
		});
	},
	//监听标题栏搜索框点击事件
	onNavigationBarSearchInputClicked(){
		uni.navigateTo({
			url:"../search/search"
		})
	},
	onNavigationBarButtonTap(e){
		// console.log(e)
		switch (e.index){
			case 1:
			  uni.navigateTo({
			  	url:"../add-input/add-input"
			  })
				break;
		
		}
	},
	methods: {
		tabtap(index) {
			this.tabIndex = index;
		},
		// 滑动事件
		tabChange(e) {
			this.tabIndex = e.detail.current;
		},
		// 上拉加载
		loadmore(index) {
			if (this.newslist[index].loadtext != '上拉加载更多') {
				return;
			}
			// 修改状态
			this.newslist[index].loadtext = '加载中...';
			// 获取数据
			setTimeout(() => {
				//获取完成
				let obj = {
					userpic: '../../static/demo/userpic/12.jpg',
					username: '昵称',
					isguanzhu: false,
					title: '我是标题',
					type: 'img', // img:图文,video:视频
					titlepic: '../../static/demo/datapic/11.jpg',
					infonum: {
						index: 0, //0:没有操作，1:顶,2:踩；
						dingnum: 11,
						cainum: 11
					},
					commentnum: 10,
					sharenum: 10
				};
				this.newslist[index].list.push(obj);
				this.newslist[index].loadtext = '上拉加载更多';
			}, 100);
			// this.newslist[index].loadtext="没有更多数据了";
		}
	}
};
</script>

<style>


</style>
