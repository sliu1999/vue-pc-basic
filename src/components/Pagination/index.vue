<template>
    <div class="pagination">
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="total" background>
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        pageSize: {
            type: [Number, String],
            default: 0
        },
        currentPage: {
            type: [Number, String],
            default: 1
        },
        total: {
            type: [Number, String],
            default: 0
        }
    },
    methods: {
        handleCurrentChange (val) {
            // console.log(val)
            this.$emit('current-change', val)
        }
    }
}
</script>

<style scoped>
.pagination {
    padding: 30px 0;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ffba00;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ffba00;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: #fff;
}
</style>

