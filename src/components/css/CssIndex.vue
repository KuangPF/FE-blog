<template>
    <div class="js-index">
        <ItemIndex :itemData="itemData"></ItemIndex>
        <Doing></Doing>
    </div>
</template>

<script>
import ItemIndex from '../ItemIndex';
import Doing from '../Doing';
import { getCssItemLists } from '../../api/api';
export default {
    data() {
        return {
            itemData: ''
        };
    },
    components: {
        ItemIndex,
        Doing
    },
    created() {

    },
    mounted() {
        getCssItemLists().then(res => {
            this.itemData = res.data;
        });
    }
};
</script>

<style>

</style>
