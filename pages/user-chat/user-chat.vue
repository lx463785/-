<template>
	<view>
		<scroll-view id="scrollview" scroll-y :scroll-top="scrolltop" :scroll-with-animation="true" :style="{ height: style.contentH + 'px' }">
			<!-- 聊天列表 -->
			<block v-for="(item, index) in list" :key="index"><user-chat-list :item="item" :index="index"></user-chat-list></block>
		</scroll-view>

		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
import userChatList from '../../components/user-chat/user-chat-list.vue';
import time from '../../common/time.js';
import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
export default {
	components: {
		userChatBottom,
		userChatList
	},
	data() {
		return {
			list: [],
			scrolltop: 0,
			style: {
				contentH: 0,
				itemH: 0
			}
		};
	},
	onLoad() {
		this.getdata();
		this.initdata();
	},
	onReady() {
		this.pageToBottom();
	},
	methods: {
	
		// 页面高度
		pageToBottom() {
			let q = uni.createSelectorQuery();
			q.select('#scrollview').boundingClientRect();
			q.selectAll('.user-chat-item').boundingClientRect();
			q.exec(res => {
				res[1].forEach(ret => {
					this.style.itemH += ret.height;
				});
				if (this.style.itemH > this.style.contentH) {
					this.scrolltop = this.style.itemH;
				}
				// console.log(JSON.stringify(res))
			});
		},

		// 初始化数据
		initdata() {
			try {
				const res = uni.getSystemInfoSync();
				this.style.contentH = res.windowHeight - uni.upx2px(120);
			} catch (e) {
				//TODO handle the exception
			}
		},

		// 获取聊天数据
		getdata() {
			// 从服务器获取到的数据
			let arr = [
				{
					isme: false,
					userpic: '../../static/demo/userpic/11.jpg',
					type: 'text',
					data: '哈哈哈',
					time: '1555146412'
				},
				{
					isme: true,
					userpic: '../../static/demo/userpic/10.jpg',
					type: 'img',
					data: '../../static/demo/3.jpg',
					time: '1555146414'
				}
			];
			for (let i = 0; i < arr.length; i++) {
				arr[i].gstime = time.gettime.getChatTime(arr[i].time, i > 0 ? arr[i - 1].time : 0);
			}
			this.list = arr;
		},
		submit(data) {
			// 构建数据
			if (data == '') {
				return;
			}
			let now = new Date().getTime();
			let obj = {
				isme: true,
				userpic: '../../static/demo/userpic/10.jpg',
				type: 'text',
				data: data,
				time: now,
				gstime: time.gettime.getChatTime(now, this.list[this.list.length - 1].time)
			};
			this.list.push(obj);
			this.pageToBottom();
		}
	}
};
</script>

<style>
.user-chat-list > image {
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	flex-shrink: 0;
}
.user-chat-list-body {
	position: relative;
	background-color: #f4f4f4;
	padding: 25upx;
	margin-left: 20upx;
	border-radius: 20upx;
	margin-right: 100upx;
}
.user-chat-list-body::after {
	position: absolute;
	left: -30upx;
	right: 0;
	top: 10upx;
	content: '';
	height: 0;
	width: 0;
	border: 16upx solid #f4f4f4;
	border-color: transparent #f4f4f4 transparent transparent;
}
.user-chat-list-body > image {
	max-width: 150upx;
	max-height: 200upx;
}
.user-chat-me {
	justify-content: flex-end;
}
.user-chat-me .user-chat-list-body {
	margin-right: 20upx;
	margin-left: 100upx;
}
.user-chat-me .user-chat-list-body:after {
	left: auto;
	right: -30upx;
	border-color: transparent transparent transparent #f4f4f4;
}
</style>
