const FIND_MUSIC = 'find_music'
const LOCAL_LIBRARY = 'local_library'
const MY_LOVE = 'my_love'
const RECOMMEND = 'recommend'
const HOT = 'hot'
const SINGER = 'singer'
const SONG = 'song'
const MV = 'mv'
const COLLECTION = 'collection'

const findMusicMap = [
	{
		id: 0,
		title: '个性推荐',
		value: RECOMMEND
	},
	{
		id: 1,
		title: '排行榜',
		value: HOT
	},
	{
		id: 2,
		title: '歌手',
		value: SINGER
	}
]

const loacalLibraryMap = [
	{
		id: 0,
		title: '歌曲',
		value: SONG
	},
	{
		id: 1,
		title: 'MV',
		value: MV
	}
]

const collectionMap = [
	{
		id: 0,
		title: '我的收藏',
		value: COLLECTION
	}
]

export default [
	{
		id: 0,
		title: '发现音乐',
		value: FIND_MUSIC,
		icon: 'compass',
		child: findMusicMap
	},
	{
		id: 1,
		title: '本地音乐库',
		value: LOCAL_LIBRARY,
		icon: 'folder',
		child: loacalLibraryMap
	},
	{
		id: 2,
		title: '我喜欢',
		value: MY_LOVE,
		icon: 'heart',
		child: collectionMap
	}
]