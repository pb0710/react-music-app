// 生成数组序列
export const fillArraySequence = length => Array(length).fill(0).map((item, index) => index)

// 生成区间内随机数（并非等概率）
export const randomBetween = (begin, end) => Math.floor(Math.random() * (end - begin) + begin)

// 生成符合Suspense标准的promise
export const wrapToSuspense = promise => {
  let status = 'PENDING'
  let result
  let suspender = promise.then(
    res => {
      status = 'SUCCESS'
      result = res
    },
    err => {
      status = 'FAIL'
      result = err
    }
  )
  return {
    read() {
      switch (status) {
        case 'PENDING':
          throw suspender
        case 'FAIL':
          throw result
        case 'SUCCESS':
          return result
      }
    }
  }
}

// 转换成时间格式
export const timeFormat = (duration = 0) => {
  let min = Math.floor(duration / 60)
  let sec = Math.floor(duration % 60)
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}