import request from '@/utils/request'

const homeApi = {
    create: function () {
        const obj = {}
        //首页
        obj.homepage = function () {
            return request({
                url: '/SysPcHomepageInfo/getSysPcHomepageInfo',
                method: 'get',
            })
        }
        //通过地图查询公司信息
        obj.company = function (companyCode) {
            return request({
                url: '/SysPcHomepageCompanyInfo/getSysPcHomepageCompanyInfoByCompanyCode/' + companyCode,
                method: 'get',

            })
        }
        //模块
        obj.tabBox = function (data) {
            return request({
                url: '/SysPcHomepageMenu/list',
                method: 'post',
                data: data
            })
        }

        //超链接协议
        obj.agreement = function (id) {
            return request({
                url: '/Agreement/' + id,
                method: 'get',
            })
        }

        //超链接协议
        obj.getMapIndex = function (data) {
            return request({
                url: '/SysPcHomepageCompanyInfo/list',
                method: 'post',
                data
            })
        }
        return obj
    }
}.create()

export default homeApi