<template>
    <div class="edit">
        <h2>edit</h2>
        <div class="test">mytest:{{mytest}}</div>
        <div>
            <input type="text" v-model="val">
            <span @click="changeMytest1">set(mutations)</span>
            <span @click="changeMytest2">set(actions)</span>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    name: 'Edit',
    data() {
        return {
            val: ''
        };
    },
    computed: {
        ...mapGetters([
            'mytest'
        ])
    },
    methods: {
        ...mapMutations({
            setMytestMut: 'SET_MYTEST'
        }),
        ...mapActions([
            'setMytest'
        ]),
        changeMytest1() {
            this.setMytestMut(this.val)
        },
        changeMytest2() {
            this.setMytest({
                mytest: this.val
            })
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
