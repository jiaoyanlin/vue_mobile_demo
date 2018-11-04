<template>
    <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="title">
                <span>{{item.title}}</span>
                <span class="time">{{formatDate(item.time)}}</span>
            </div>
            <div class="content">
                <span>{{item.content}}</span>
                <span class="star active" v-if="item.star" @click="onStar(index, 0)">★</span>
                <span class="star" v-else @click="onStar(index, 1)">☆</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'List',
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters([
            'list'
        ])
    },
    methods: {
        ...mapActions([
            'setListStar'
        ]),
        formatDate(date) {
            let d = new Date(date);
            return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        },
        onStar(index, flag) {
            console.log('--------onstar', index, flag);
            this.setListStar({index, flag});
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list {
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
