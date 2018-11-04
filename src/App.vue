<template>
    <div id="app">
        <h1>my todo list</h1>
        <div class="header">
            <router-link tag="div" class="item" to="/edit">
                <span>编辑</span>
            </router-link>
            <router-link tag="div" class="item" to="/list">
                <span>列表</span>
            </router-link>
            <router-link tag="div" class="item" to="/star">
                <span>收藏</span>
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.header {
    display: flex;
    max-width: 500px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    background: #eee;
}

.header .item {
    flex: 1;
    cursor: pointer;
}

.header .item.router-link-active {
    background: #ddd;
    color: #0a0;
}
</style>
