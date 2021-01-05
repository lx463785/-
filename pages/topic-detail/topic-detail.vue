<template>
	<view>
		<topic-info :item="topicInfo"></topic-info>
		<!-- 默认tab栏 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollItemStyle="width:50%;"
		scrollStyle="border-bottom:0;"></swiper-tab-head>
				<!-- 列表 -->
				<view class="topic-detail-list">
					<block v-for="(item,index) in tablist" :key="index">
						<template v-if="tabIndex==index">
							<!-- 列表 -->
							<block v-for="(list,listindex) in item.list" :key="listindex">
								<common-list :item="list" :index="listindex"></common-list>
							</block>
							<!-- 上拉加载 -->
												<load-more :loadtext="item.loadtext"></load-more>
						</template>
					</block>
				</view>
	</view>
</template>

<script>
	
		import topicInfo from "../../components/topic/topic-info.vue";
		import swiperTabHead from "../../components/index/swiper-tab-head.vue";
		import commonList from "../../components/common/common-list.vue";
		import loadMore from "../../components/common/load-more.vue";
export default {
	components:{
		topicInfo,
		swiperTabHead,
		commonList,
		loadMore
	},
	data() {
		return {
			topicInfo:{
								titlepic:"../../static/demo/topicpic/13.jpeg",
								title:"忆往事，敬余生",
								desc:"我是描述",
								totalnum:1000,
								todaynum:1000,
							},
							tabIndex:0,
							tabBars:[
								{ name:"默认",id:"moren" },
								{ name:"最新",id:"zuixin" },
							],
							tablist:[
								{
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
									]
								},
								{
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
									]
								},
							]
					
		};
	},
	onReachBottom() {
		this.loadmore();
	},
	onPullDownRefresh() {
		// console.log(111)
		this.getdata();
	},
	methods: {
			// tabbar点击事件
					tabtap(index){
						this.tabIndex=index;
					},
					// 上拉加载
								loadmore(){
									if(this.tablist[this.tabIndex].loadtext!="上拉加载更多"){ return; }
									// 修改状态
									this.tablist[this.tabIndex].loadtext="加载中...";
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
										this.tablist[this.tabIndex].list.push(obj);
										this.tablist[this.tabIndex].loadtext="上拉加载更多";
									}, 1000);
									//this.tablist[this.tabIndex].loadtext="没有更多数据了";
								},
								getdata(){
												setTimeout(()=> {
													// 获取数据
													let arr=[
														// 文字
														{
															userpic:"../../static/demo/userpic/12.jpg",
															username:"哈哈111111",
															sex:0, //0 男 1 女
															age:25,
															isguanzhu:false,
															title:"我是标题11111",
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
													];
													// 赋值
													this.tablist[this.tabIndex].list=arr;
													// 关闭下拉刷新
													uni.stopPullDownRefresh();
												}, 2000);
											},
	}
};
</script>

<style>
.topic-bg{
	width: 100%;
	height: 300upx;
	position: relative;
	overflow: hidden;
}
.topic-bg>image{
	width: 100%;
	position: absolute;
	filter: blur(10px);
}
.topic-info{
	padding: 0 25upx;
}
.topic-info-t{
	position: relative;
}
.topic-info-t>image{
	width: 150upx;
	height: 150upx;
	border-radius: 20upx;
	position: absolute;
	top: -75upx;
}
.topic-info-t>view{
	font-size: 35upx;
	margin-left: 170upx;
	flex: 1;
}
.topic-info-c{
	padding: 35upx 0 15upx 0;
}
.topic-info-c view{
	color: #CDCDCD;
}
.topic-info-b{
	color: #A3A3A3;
	font-size: 32upx;
	padding-bottom: 10upx;
}
</style>
