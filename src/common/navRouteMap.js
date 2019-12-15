const findMusicMap = [
	{
		id: 0,
		title: '个性推荐',
		value: 'recommend'
	},
	{
		id: 1,
		title: '排行榜',
		value: 'hot'
	},
	{
		id: 2,
		title: '歌手',
		value: 'singer'
	}
]

const loacalLibraryMap = [
	{
		id: 0,
		title: '歌曲',
		value: 'song'
	},
	{
		id: 1,
		title: 'MV',
		value: 'mv'
	}
]

const collectionMap = [
	{
		id: 0,
		title: '我的收藏',
		value: 'collection'
	}
]

export default [
	{
		id: 0,
		title: '发现音乐',
		value: 'find_music',
		icon: 'compass',
		child: findMusicMap
	},
	{
		id: 1,
		title: '本地音乐库',
		value: 'local_library',
		icon: 'folder',
		child: loacalLibraryMap
	},
	{
		id: 2,
		title: '我喜欢',
		value: 'my_love',
		icon: 'heart',
		child: collectionMap
	}
]