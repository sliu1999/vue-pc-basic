// import parseTime, formatTime and set to filter
export {
	parseTime,
	formatTime
}
from '@/utils'

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
	if (time === 1) {
		return time + label
	}
	return time + label + 's'
}

/**
 * @param {number} time
 */
export function timeAgo(time) {
	const between = Date.now() / 1000 - Number(time)
	if (between < 3600) {
		return pluralize(~~(between / 60), ' minute')
	} else if (between < 86400) {
		return pluralize(~~(between / 3600), ' hour')
	} else {
		return pluralize(~~(between / 86400), ' day')
	}
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
	const si = [{
			value: 1E18,
			symbol: 'E'
		},
		{
			value: 1E15,
			symbol: 'P'
		},
		{
			value: 1E12,
			symbol: 'T'
		},
		{
			value: 1E9,
			symbol: 'G'
		},
		{
			value: 1E6,
			symbol: 'M'
		},
		{
			value: 1E3,
			symbol: 'k'
		}
	]
	for (let i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
		}
	}
	return num.toString()
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
	return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

// 农技专家上门
// 数据状态 01待服务2待评价3已完成4关闭
// 数据状态 0等待确认1待服务2待评价3已完成4关闭
// 数据状态 0等待确认1待服务2待评价3已完成4用户取消5专家取消6等待专家确认上门7专家确认上门8等待用户确认专家上门9用户确认专家上门
export function FORMATSTATUS(num) {
	switch (num) {
		case 0:
			return '等待专家接单'
			break;
		case 1:
			return '待服务'
			break;
		case 2:
			return '待评价'
			break;
		case 3:
			return '订单已经完成'
			break;
		case 4:
			return '订单已关闭'
			break;
		case 5:
			return '专家已取消订单'
			break;
		case 6:
			return '等待用户确认专家上门'
			break;
	}
}

export function FORMATMONEY(val) {
	val = val ? val : 0
	return '￥' + val
}

// 数据状态 0待寄送1待检测2待收货4完成5关闭6待付款
export function FORMATTEST(num) {
	switch (num) {
		case 0:
			return '测土配方待寄送'
			break;
		case 1:
			return '测土待检测'
			break;
		case 2:
			return '订单待收货'
			break;
		case 4:
			return '订单已经完成'
			break;
		case 5:
			return '订单已关闭'
			break;
		case 6:
			return '订单待付款'
			break;
	}
}

export function FORMATUSER(num) {
	switch (num) {
		case 1:
			return '农机手'
			break;
		case 2:
			return '苏垦顾问'
			break;
		case 3:
			return '体系专家'
			break;
		case 6:
			return '植保飞机手'
			break;
		case 7:
			return '农机合作社'
			break;
		case 8:
			return '普通用户'
			break;
		case 9:
			return '种植大户'
			break;
		case 10:
			return '经销商'
			break;
		case 11:
			return '服务商'
			break;
	}
}


// 订单状态（0 待确认  1.农户待付款  2 待服务 3 进行中 4 待付尾款 5 待评价 6已关闭(待确认或者农户未付钱关闭的情况) 
// 7 农机手关闭 8 客户关闭  9申报故障 10 已完成）
export function FORMATNJORDER(num) {
	switch (num) {
		case 0:
			return '等待机手确认'
			break;
		case 1:
			return '等待用户付款'
			break;
		case 2:
			return '等待机手服务'
			break;
		case 3:
			return '机手正在服务'
			break;
		case 4:
			return '等待机手结算'
			break;
		case 5:
			return '等待评价'
			break;
		case 6:
			return '已关闭'
			break;
		case 7:
			return '农机手关闭'
			break;
		case 8:
			return '客户关闭'
			break;
		case 9:
			return '机手申报故障'
			break;
		case 10:
			return '交易成功'
			break;
		case 11:
			return '待用户评价'
			break;
		case 12:
			return '待机手评价'
			break;
		case 13:
			return '待用户付尾款'
			break;
	}
}
