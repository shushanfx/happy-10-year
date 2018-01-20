<template>
	<div class="c-mine">
		<wv-search @click="enter" :autofocus="false" v-model="search.text"></wv-search>
		<wv-group v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" class="my-list">
			<wv-cell v-for="item in list" :key="item" class="my-item">
				<div slot="icon" class="my-item-left">
                    <img class="my-item-logo" src="../assets/logo.png"/>
                </div>
                <div slot="bd" class="my-item-right">
                    <h2>A tour of {{name}}</h2>
					<p>状态: Name{{item}}</p>
					<p>人数: {{item}}</p>
				</div>
			</wv-cell>
		</wv-group>
		<p v-show="loading" class="loading-tips">
			<wv-loadmore></wv-loadmore>
		</p>

	</div>
</template>

<script>
    export default {
        name: "mine",
        methods: {
            enter() {
                alert(this.search.text);
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            }
        },
        data() {
            return {
                "search": {
                    text: ""
                },
                list: [100],
                "loading": false
            }
        }
    }
</script>

<style>
    .c-mine .my-list .weui-cells {
        margin-top: 0;
    }
    
    .c-mine .my-list .my-item {
        margin-bottom: 5px;
    }
    .c-mine .my-list .my-item:before {
        left: 0;
    }

    .c-mine .my-list .my-item-left {
        position: relative;
        width: 1.733333rem;
        width: 17.333333vw;
        height: 1.733333rem;
        height: 17.333333vw;
    }
    .c-mine .my-list .my-item-left .my-item-logo {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: .053333rem;
        border-radius: .533333vw;
        border: .013333rem solid rgba(0,0,0,.08);
        border: .133333vw solid rgba(0,0,0,.08);
    }
    .c-mine .my-list .my-item-right {
        text-align: left;
        display: -webkit-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-between;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        overflow: hidden;
    }

    .c-mine .loading-tips {
        margin: 0;
        border-top: none;
    }
</style>