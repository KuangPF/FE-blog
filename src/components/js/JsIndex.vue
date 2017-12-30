<template>
    <div class="js-index">
        <ItemIndex :itemData="itemData" v-if="isShowItemIndex"></ItemIndex>
        <Doing></Doing>
    </div>
</template>

<script>
import ItemIndex from '../ItemIndex';
import Doing from '../Doing';
import { getJavascriptItemLists } from '../../api/api';
export default {
    data() {
        return {
            itemData: '',
            isShowItemIndex: false
        };
    },
    components: {
        ItemIndex,
        Doing
    },
    created() {

    },
    mounted() {
        getJavascriptItemLists().then(res => {
            this.itemData = res.data;
            this.isShowItemIndex = true;
        });
    }
};
</script>

<style>

</style>
