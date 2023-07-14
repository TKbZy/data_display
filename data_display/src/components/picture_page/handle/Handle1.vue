<template>
    <div id="show_picture" class="row" w="full" py="4">

    </div>
</template>
<script lang="js">
import handle1 from './handle1';

export default {
    mounted() { handle1(); }
}
</script>

<style>
.row {
    display: flex;
}
</style>