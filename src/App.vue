<template>
	<div id="app">
		<wv-header :title="header.text" :fixed="true">
			<div slot="left" class="app-header-left">
				<div v-show="header.left" @click="$router.back('/')">
					&nbsp;&nbsp;<i class="fa fa-arrow-left"></i>&nbsp;&nbsp;
				</div>
			</div>
			<div slot="right" class="app-header-right">
				<div v-show="header.add" @click="$router.push('/add')">
					&nbsp;&nbsp;<i class="fa fa-plus"></i>&nbsp;&nbsp;
				</div>
			</div>
		</wv-header>
		<div v-show="progressShow" style="z-index: 100; position:fixed; left: 0; top: 50px; width: 100%;">
			<wv-progress :show-clear="false" :percent="percent"></wv-progress>
		</div>
		<router-view />
		<wv-tabbar :fixed="true">
			<wv-tabbar-item :key="tabItem.path" v-for="(tabItem, tabIndex) in tabList" :to="tabItem.path" :is-on="tabIndex == tabCurrent">
				<img class="weui-tabbar__icon" :src="tabItem.icon" slot="icon" /> {{tabItem.text}}
			</wv-tabbar-item>
		</wv-tabbar>
	</div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'app',
        computed: {
            ...mapState({
                percent: (state) => {
                    return state.progress.percent;
                },
                progressShow: (state) => {
                    return state.progress.show;
                },
                tabList: (state) => {
                    return state.tabList.list;
                },
                tabCurrent: (state) => {
                    return state.tabList.current
                },
                header: (state) => {
                    return state.header;
                }
            })
        },
        data() {
            return {}
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    
    #app .wv-header-btn {
        font-size: 24px;
        font-height: 24px;
    }
    
    #app .app-header-left,
    #app .app-header-right {
        width: 46px;
    }
</style>