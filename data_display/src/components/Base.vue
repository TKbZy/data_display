<template>
    <el-config-provider namespace="ep">
        <el-menu id="header" class="el-menu-demo" mode="horizontal">
            <div style="width: 1%;"></div>
            <div class="flex" style="width: 20%;">
                <img src="../assets/logo.png" class="headLogo">
                <span class="name">二手房数据统计平台</span>
            </div>
        </el-menu>

        <div id="picture_page" class="flex main-container">
            <PicturePage />
        </div>
    </el-config-provider>
</template>


<style>
.main-container {
    height: calc(100vh - var(--ep-menu-item-height) - 3px);
}

.headLogo {
    width: 75px;
    height: 75px;
}

.name {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
}
</style>