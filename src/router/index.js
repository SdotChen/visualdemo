// 该文件专门创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入路由组件
import FlowSize from "@/pages/FlowSize";
import HeavyHitter from "@/pages/HeavyHitter";
import HeavyChange from "@/pages/HeavyChange";
import FlowDistribution from "@/pages/FlowDistribution";

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/FlowSize',
            component:FlowSize
        },
        {
            path:'/HeavyHitter',
            component: HeavyHitter
        },
        {
            path:'/HeavyChange',
            component: HeavyChange
        },
        {
            path:'/FlowDistribution',
            component: FlowDistribution
        }
    ]
})