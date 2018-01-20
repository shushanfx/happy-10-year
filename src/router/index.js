import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import store from "../store"

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: "/home",
        name: "Home",
        component: Home
    }, {
        path: "/follow",
        name: "Follow",
        component: resolve => {
            return require(["@/components/Follow"], resolve)
        }
    }, {
        path: "/mine",
        name: "Mine",
        component: resolve => {
            return require(["@/components/Mine"], resolve)
        }
    }, {
        path: "/add",
        name: "Add",
        component: resolve => {
            return require(["@/components/Add"], resolve)
        }
    }]
});

router.beforeEach((t, f, next) => {
    store.commit("progressStart");
    let index = -1;
    store.state.tabList.list.forEach((item, itemIndex) => {
        if (index === -1 && item.path === t.path) {
            index = itemIndex;
        }
    });
    store.commit("tabChange", index);
    let iCount = 0;
    let timer = setInterval(() => {
        if (iCount >= 100) {
            store.commit("progressStop");
            clearInterval(timer);
            timer = null;
            // handle router.
            if (window.history.length > 1) {
                store.commit("setHeadLeft", true);
            } else {
                store.commit("setHeadLeft", false);
            }
            console.info(t.path)
            if (t.path.indexOf("/add") !== -1) {
                store.commit("setHeadAdd", false);
            } else {
                store.commit("setHeadAdd", true);
            }
            next();
        }
        let iStep = Math.random() * 15;
        iCount += iStep;
        store.commit("progressIncrement", iStep);
    }, 10);
});

export default router