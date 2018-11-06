<template>
    <div class="edit">
        <div class="item">
            标题：<input class="title" type="text" v-model="title">
        </div>
        <div class="item">
            内容：<textarea class="content" v-model="content"></textarea>
        </div>
        <div class="item">
            <a-button type="primary" @click="onSave">保存</a-button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'Edit',
    data() {
        return {
            title: '',
            content: '',
        };
    },
    computed: {
    },
    methods: {
        ...mapActions([
            'setListAdd'
        ]),
        onSave() {
            if (!this.title) {
                alert('请输入标题');
                return false;
            }
            if (!this.content) {
                alert('请输入内容');
                return false;
            }
            this.setListAdd({
                title: this.title,
                content: this.content,
                time: +new Date(),
            });
            alert('保存成功');
            this.title = '';
            this.content = '';
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.edit {
    .item {
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .title {
        width: 320px;
        height: 30px;
        line-height: 30px;
    }

    .content {
        width: 320px;
        height: 200px;
        padding: 10px;
        box-sizing: border-box;
    }

    .btn {
        padding: 5px 20px;
        border-radius: 8px;
        background: #ddd;
        cursor: pointer;
    }
}
</style>
