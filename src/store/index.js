import Vue from "vue";
import Vuex from "vuex";

import icon1 from "@/assets/button_list.png";
import icon2 from "@/assets/button_mine.png";
import icon3 from "@/assets/button_me.png";


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        progress: {
            show: false,
            percent: 0
        },
        tabList: {
            list: [{
                    "text": "所有活动",
                    "icon": icon1,
                    "path": "/"
                },
                {
                    "text": "加入的活动",
                    "icon": icon2,
                    "path": "/follow"
                },
                {
                    "text": "我的活动",
                    "icon": icon3,
                    "path": "/mine"
                }
            ],
            current: 0
        },
        header: {
            text: "知言之家",
            left: true,
            add: true
        }
    },
    strict: process.env.NODE_ENV !== 'production',
    mutations: {
        progressStart: (state) => {
            state.progress.show = true;
            state.progress.percent = 0;
        },
        progressIncrement: (state, value) => {
            let newValue = state.progress.percent + value;
            if (newValue > 100) {
                newValue = 100;
            } else if (newValue < 0) {
                newValue = 0;
            }
            state.progress.percent = newValue;
        },
        progressStop: (state) => {
            state.progress.percent = 100;
            state.progress.show = false;
        },
        tabChange: (state, index) => {
            state.tabList.current = index;
        },
        setHeadLeft: (state, b) => {
            state.header.left = !!b;
        },
        setHeadAdd: (state, b) => {
            state.header.add = !!b;
        }
    }
});