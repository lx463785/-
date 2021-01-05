<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="changeTab"></news-nav-bar>
		<view class="uni-tab-bar">
		<swiper class="swiper-box" :style="{ height: swiperheight + 'px' }" :current="tabIndex" @change="tabChange">
			
			<swiper-item >
					<scroll-view scroll-y class="list" @scrolltolower="loadmore()" >
						<!--列表 -->
						<block v-for="(item, index) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index" @isguanzhu="isguanzhu"></common-list>
						</block>
						<load-more :loadtext="guanzhu.loadtext"></load-more>
					</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" class="list" >
					<!-- 话题搜索 -->
					<view class="search-input">
						<input class="uni-input" type="text" placeholder="搜索内容" placeholder-class="icon iconfont icon-sousuo topic-search" />
					</view>
					<!-- 话题的轮播图 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item v-for="(item,index) in topic.swiper          ">
								<view class="swiper-item" >
								<image :src="item.src" mode="widthFix" lazy-load></image>
								</view>
							</swiper-item>
						</swiper>
					<!-- 热门分类 -->
					<topic-nav :topic="topic.nav" ></topic-nav>
					<!-- 最近更新 -->
					<view class="topic-new">
						<view>最近更新</view>
						<block v-for="(item,index) in topic.list" :key="index">
									<topic-list   :item="item" :index="index"></topic-list>
						</block>
				
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		</view>
	</view>
</template>

<script>
import newsNavBar from '../../components/news/news-nav-bar.vue';
import commonList from '../../components/common/common-list.vue';
import loadMore from "../../components/common/load-more.vue";
import topicNav from "../../components/news/topic-nav.vue"
import topicList from "../../components/news/topic-list.vue"
export default {
	components: {
		newsNavBar,
		commonList,
		loadMore,
		topicNav,
		topicList
	},
	data() {
		return {
			tabIndex: 0,
			swiperheight:500,
			tabBars: [{ name: '关注', id: 'guanzhu' }, { name: '话题', id: 'topic' }],
				guanzhu:{
								loadtext:"上拉加载更多",
								list:[
									// 文字
									{
										userpic:"../../static/demo/userpic/12.jpg",
										username:"哈哈",
										sex:0, //0 男 1 女
										age:25,
										isguanzhu:false,
										title:"我是标题",
										titlepic:"",
										video:false,
										share:false,
										path:"深圳 龙岗",
										sharenum:20,
										commentnum:30,
										goodnum:20
									},
									// 图文
									{
										userpic:"../../static/demo/userpic/12.jpg",
										username:"哈哈",
										sex:0, //0 男 1 女
										age:25,
										isguanzhu:false,
										title:"我是标题",
										titlepic:"../../static/demo/datapic/13.jpg",
										video:false,
										share:false,
										path:"深圳 龙岗",
										sharenum:20,
										commentnum:30,
										goodnum:20
									},
									// 视频
									{
										userpic:"../../static/demo/userpic/12.jpg",
										username:"哈哈",
										sex:0, //0 男 1 女
										age:25,
										isguanzhu:false,
										title:"我是标题",
										titlepic:"../../static/demo/datapic/13.jpg",
										video:{
											looknum:"20w",
											long:"2:47"
										},
										share:false,
										path:"深圳 龙岗",
										sharenum:20,
										commentnum:30,
										goodnum:20
									},
									// 分享
									{
										userpic:"../../static/demo/userpic/12.jpg",
										username:"哈哈",
										sex:0, //0 男 1 女
										age:25,
										isguanzhu:false,
										title:"我是标题",
										titlepic:"",
										video:false,
										share:{
											title:"我是分享的标题",
											titlepic:"../../static/demo/datapic/14.jpg"
										},
										path:"深圳 龙岗",
										sharenum:20,
										commentnum:30,
										goodnum:20
									},
								]
							},
							topic:{
												swiper:[
													{ src:"../../static/demo/banner1.jpg" },
													{ src:"../../static/demo/banner2.jpg" },
													{ src:"../../static/demo/banner3.jpg" },
												],
												nav:[
													{name:"最新"},
													{name:"游戏"},
													{name:"打卡"},
													{name:"情感"},
													{name:"故事"},
													{name:"喜爱"},
												],
													list:[
																		{
																			titlepic:"../../static/demo/topicpic/13.jpeg",
																			title:"话题名称",
																			desc:"我是话题描述",
																			totalnum:50,
																			todaynum:10
																		},
																		{
																			titlepic:"../../static/demo/topicpic/13.jpeg",
																			title:"话题名称",
																			desc:"我是话题描述",
																			totalnum:50,
																			todaynum:10
																		},
																		{
																			titlepic:"../../static/demo/topicpic/13.jpeg",
																			title:"话题名称",
																			desc:"我是话题描述",
																			totalnum:50,
																			todaynum:10
																		},
																		{
																			titlepic:"../../static/demo/topicpic/13.jpeg",
																			title:"话题名称",
																			desc:"我是话题描述",
																			totalnum:50,
																			todaynum:10
																		},
																		{
																			titlepic:"../../static/demo/topicpic/13.jpeg",
																			title:"话题名称",
																			desc:"我是话题描述",
																			totalnum:50,
																			todaynum:10
																		},
																		{
																			titlepic:"../../static/demo/topicpic/13.jpeg",
																			title:"话题名称",
																			desc:"我是话题描述",
																			totalnum:50,
																			todaynum:10
																		}
																	]
											}
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
	methods: {
		isguanzhu(index) {
			console.log(index);
			this.list[index].isguanzhu = true;
		},
		changeTab(index) {
			this.tabIndex = index;
		},
		// 滑动事件
		tabChange(e) {
			this.tabIndex = e.detail.current;
		},
		// 上拉加载
					loadmore(){
						if(this.guanzhu.loadtext!="上拉加载更多"){ return; }
						// 修改状态
						this.guanzhu.loadtext="加载中...";
						// 获取数据
						setTimeout(()=> {
							//获取完成
							let obj={
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							};
							this.guanzhu.list.push(obj);
							this.guanzhu.loadtext="上拉加载更多";
						}, 1000);
						// this.guanzhu.loadtext="没有更多数据了";
					}
	}
};
</script>

<style>
	.search-input{
		padding: 20upx;
	}
	.search-input>input{
		background: #F4F4F4;
		border-radius:10upx;
	}
.topic-search{
	display: flex;
	justify-content: center;
	font-size: 30upx;
}
.swiper-item>image{
	/* display: flex;
	justify-content: center; */
	width: 100%;
	border-radius: 10upx;
}
.topic-swiper{
	padding: 0 20upx 20upx 20upx;
}
	.topic-new{
		padding: 20upx 20upx;
	}
	.topic-new>view:first-child{
		font-size: 32upx;
		color: #333333;
	}

</style>
