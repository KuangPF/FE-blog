<template>
    <div class="js-index">
        <ItemIndex :itemData="itemData"></ItemIndex>
    </div>
</template>

<script>
import ItemIndex from '../ItemIndex';
import { getJavascriptItemLists } from '../../api/api';
export default {
    data() {
        return {
            itemData: ''
        };
    },
    components: {
        ItemIndex
    },
    mounted() {
        getJavascriptItemLists().then(res => {
            this.itemData = res.data;
        });
    }
};
</script>

<style>

</style>
