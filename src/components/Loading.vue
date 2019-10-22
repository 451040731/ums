<template>
    <div>
        <Spin fix v-if="this.isGlobalSpin">
            <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中请稍后...</div>
        </Spin>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return{
            
        }
    },
    computed: {
        ...mapState({
            isGlobalSpin: state => state.app.isGlobalSpin
        })
    }
}
</script>

<style lang="scss" scoped>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50% { transform: rotate(180deg);}
        to { transform: rotate(360deg);}
    }
    .ivu-spin-fix {
        position: fixed;
    }
</style>