<template>
    <div class="flex al_center">
        <div class="fl font14 address">当前位置：</div>
        <el-breadcrumb class="app-breadcrumb" separator=">">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item class="cursor" v-for="(item,index) in levelList" :key="item.path">
                    <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect cursor">{{ item.meta.title }}</span>
                    <a class="cursor" v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
    data () {
        return {
            levelList: null
        }
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        }
    },
    created () {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb () {
            // only show routes with meta.title
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first = matched[0]

            if (!this.isDashboard(first)) {
                matched = [{ path: '/', meta: { title: '首页' } }].concat(matched)
            }

            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        isDashboard (route) {
            const name = route && route.name
            if (!name) {
                return false
            }
            return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
        },
        pathCompile (path) {
            // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
            const { params } = this.$route
            var toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
        handleLink (item) {
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            this.$router.push(this.pathCompile(path))
        }
    }
}
</script>

<style lang="scss" scoped>
.address {
    color: #a1a1a1;
}

::v-deep .el-breadcrumb__inner a:hover,
.el-breadcrumb__inner.is-link:hover {
    color: #23cd68;
}

::v-deep .el-breadcrumb__inner a {
    font-weight: 400;
    color: #a1a1a1;
}

::v-deep .el-breadcrumb__separator {
    font-weight: 400;
}

.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect {
        color: #23cd68;
        cursor: text;
    }
}
</style>
