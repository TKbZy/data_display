<style>
    .logo {
        width: 25px;
        height: 25px;
    }
</style>

<template>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item index="1" @click="handle1">
            <img class="logo" src="../../assets/折线图.png"> &nbsp;
            <span>房源数量</span>
        </el-menu-item>


        <el-menu-item index="2" @click="handle2">
            <img class="logo" src="../../assets/柱状图.png"> &nbsp;
            <span>平均单价</span>
        </el-menu-item>


        <el-menu-item index="3" @click="handle3">
            <img class="logo" src="../../assets/排序柱状图.png"> &nbsp;
            <span>总价最高Top20</span>
        </el-menu-item>


        <el-menu-item index="4" @click="handle4">
            <img class="logo" src="../../assets/chartheat.png"> &nbsp;
            <span>热力图</span>
        </el-menu-item>

        <el-menu-item index="5" @click="handle5">
            <img class="logo" src="../../assets/区间.png"> &nbsp;
            <span>面积分布区间</span>
        </el-menu-item>

        <el-menu-item index="6" @click="handle6">
            <img class="logo" src="../../assets/柱状图.png"> &nbsp;
            <span>各区域平均面积</span>
        </el-menu-item>

        <el-menu-item index="7" @click="handle7">
            <img class="logo" src="../../assets/散点图.png"> &nbsp;
            <span>价格与建筑面积</span>
        </el-menu-item>

        <el-menu-item index="8" @click="handle8">
            <img class="logo" src="../../assets/饼状图.png"> &nbsp;
            <span>房屋户型</span>
        </el-menu-item>

        <el-menu-item index="9" @click="handle9">
            <img class="logo" src="../../assets/饼状图.png"> &nbsp;
            <span>房屋装修</span>
        </el-menu-item>

        <el-menu-item index="10" @click="handle10">
            <img class="logo" src="../../assets/词云.png"> &nbsp;
            <span>词云</span>
        </el-menu-item>

    </el-menu>

    <component :is="currentView"></component>
</template>
  
  
<script lang="js" setup>

import { computed, ref } from "vue";

import Handle1 from "./handle/Handle1.vue";
import Handle2 from "./handle/Handle2.vue";
import Handle3 from "./handle/Handle3.vue";
import Handle4 from "./handle/Handle4.vue";
import Handle5 from "./handle/Handle5.vue";
import Handle6 from "./handle/Handle6.vue";
import Handle7 from "./handle/Handle7.vue";
import Handle8 from "./handle/Handle8.vue";
import Handle9 from "./handle/Handle9.vue";
import Handle10 from "./handle/Handle10.vue"

const routes = {
    '/1': Handle1,
    '/2': Handle2,
    '/3': Handle3,
    '/4': Handle4,
    '/5': Handle5,
    '/6': Handle6,
    '/7': Handle7,
    '/8': Handle8,
    '/9': Handle9,
    '/10': Handle10
}
const currentPath = ref("");
const currentView = computed(() => {
    return routes[currentPath.value];
})

function handle1() { currentPath.value = "/1"; }
function handle2() { currentPath.value = "/2"; }
function handle3() { currentPath.value = "/3"; }
function handle4() { currentPath.value = "/4"; }
function handle5() { currentPath.value = "/5"; }
function handle6() { currentPath.value = "/6"; }
function handle7() { currentPath.value = "/7"; }
function handle8() { currentPath.value = "/8"; }
function handle9() { currentPath.value = "/9"; }
function handle10() { currentPath.value = "/10" }

const isCollapse = ref(false);
</script>




