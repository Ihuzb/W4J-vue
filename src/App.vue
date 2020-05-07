<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider collapsible v-model="collapsed">
            <div class="logo"/>
            <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
                <a-menu-item key="1" @click="hreftwo('')">
                    <a-icon type="pie-chart"/>
                    <span>评论列表</span>
                </a-menu-item>
                <a-menu-item key="2" @click="hreftwo('serviceManagement')">
                    <a-icon type="desktop"/>
                    <span>服务管理</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="user"/><span>User</span></span>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="team"/><span>Team</span></span>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="file"/>
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header ref="element" style="background: #fff; padding: 0"/>
            <a-layout-content :style="{margin: '0 16px',height:maxHeight+'px',overflowY: 'auto'}">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',marginTop:'32px' }">
                    <router-view/>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>


    <!--<div id="app">-->
    <!--<div id="nav">-->
    <!--<router-link to="/">Home</router-link>-->
    <!--|-->
    <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
    <!--</div>-->
</template>
<script>
    import {Layout, Menu, Icon} from 'ant-design-vue'

    export default {
        data() {
            return {
                collapsed: false,
                maxHeight: document.body.clientHeight
            }
        },
        mounted() {
            this.maxHeight = this.maxHeight - this.$refs.element.$el.clientHeight;
        },
        name: 'app',
        methods: {
            //跳转页面
            hreftwo(href) {
                console.log(href);
                this.$router.push({path: `/${href}`})
            }
        },
        components: {
            ALayout: Layout,
            ALayoutSider: Layout.Sider,
            ALayoutHeader: Layout.Header,
            ALayoutContent: Layout.Content,
            ALayoutFooter: Layout.Footer,
            AMenu: Menu,
            AMenuItem: Menu.Item,
            ASubMenu: Menu.SubMenu,
            AIcon: Icon,
        }
    }
</script>
<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #components-layout-demo-side .logo {
        height: 45px;
        background-image: url("../public/logo.jpg");
        background-position: center;
        background-size: cover;
        margin: 16px;
    }
</style>
