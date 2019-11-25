// 生成数组序列
export const fillArraySequence = length => Array(length).fill(0).map((item, index) => index)

// 生成区间内随机数
export const randomBetween = (begin, end) => Math.floor(Math.random() * (end - begin) + begin)