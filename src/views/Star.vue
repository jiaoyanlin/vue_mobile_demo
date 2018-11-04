<template>
    <div class="star">
        <div class="item" v-for="(item, index) in list" v-if="item.star" :key="index">
            <div class="title">
                <span>{{item.title}}</span>
            </div>
            <div class="content">
                <span>{{item.content}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'Star',
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters([
            'list'
        ])
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.star {
    .item {
        padding: 10px 20px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        text-align: left;
    }

    .title, .content {
        display: flex;
        justify-content: space-between;
    }

    .time {
        color: #999;
        font-size: 12px;
    }

    .content {
        font-size: 12px;
        color: #666;
    }

    .star {
        font-size: 16px;
        margin-left: 20px;

        &.active {
            color: #0a0;
        }
    }
}
</style>
