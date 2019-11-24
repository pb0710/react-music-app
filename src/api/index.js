import fetch from './fetch'

/**
 * 用户登录
 * @param  {String} options.phone    [手机号]
 * @param  {String} options.password [密码]
 * @return {Object}                  
 */
export const userLogin = ({ phone, password }) => fetch({
	url: '/login/cellphone',
	method: 'post',
	data: { phone, password }
})

/**
 * 获取轮播图
 * @return {Array}
 */
export const fetchCarousel = () => fetch({
	url: '/banner'
})

/**
 * 获取推荐歌单
 * @param  {Number} options.limit [数据长度]
 * @return {Array} [30]           
 */
export const fetchRecommendSongslist = ({ limit = 10 }) => fetch({
	url: '/personalized',
	params: { limit }
})

/**
 * 获取推荐新音乐
 * @return {Array} [10]
 */
export const fetchRecommendNewSong = () => fetch({
	url: '/personalized/newsong'
})

/**
 * 获取推荐MV
 * @return {Array} [4]
 */
export const fetchRecommendMV = () => fetch({
	url: '/personalized/mv'
})

/**
 * 获取今日推荐歌单
 * @return {Array} 
 */
export const fetchTodayRecommendResource = () => fetch({
	url: '/recommend/resource'
})

/**
 * 获取歌单详情
 * @param  {Number} options.id [歌单ID]
 * @return {Object}           
 */
export const fetchSongslistDetail = ({ id }) => fetch({
	url: '/playlist/detail',
	params: { id }
})

/**
 * 获取歌曲详情
 * @param  {...[Number]} idArgs [歌曲id，可以传多个]
 * @return {Array}          
 */
export const fetchSongsDetail = (...idArgs) => fetch({
	url: '/song/detail',
	params: {
		ids: idArgs.join(',')
	}
})

/**
 * 获取歌曲url
 * @param  {...[Number]} idArgs [歌曲id，可以传多个]
 * @return {Array}          
 */
export const fetchSongsUrl = (...idArgs) => fetch({
	url: '/song/url',
	params: {
		id: idArgs.join(',')
	}
})

export const fetchHotSearch = keywords => fetch({
	url: '/search/hot'
})

/**
 * 获取搜索建议
 * @param  {String} keywords [搜索关键字]
 * @return {Object}         
 */
export const fetchSearchSuggest = keywords => fetch({
	url: '/search/suggest',
	params: { keywords }
})

/**
 * 获取搜索结果
 * @param  {String} keywords [搜索关键字]
 * @return {Object}         
 */
export const fetchSearchResult = keywords => fetch({
	url: '/search/multimatch?',
	params: { keywords }
})