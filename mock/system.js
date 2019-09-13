import Mock from 'mockjs'
import { param2Obj } from '@/utils/tools'

const List = []
const count = 100

const baseContent = '我是测试数据我是测试数据~红红火火恍恍惚惚'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@first',
    content: baseContent,
    'status|1': [1, 0],
    create_time: '@datetime'
  }))
}

export default {
  getRoleList: config => {
    const { current = 1, pageSize = 20 } = param2Obj(config.url)

    // let mockList = List.filter(item => {
    //   if (importance && item.importance !== +importance) return false
    //   if (type && item.type !== type) return false
    //   if (title && item.title.indexOf(title) < 0) return false
    //   return true
    // })

    // if (sort === '-id') {
    //   mockList = mockList.reverse()
    // }

    const pageList = List.filter((item, index) => index < pageSize * current && index >= pageSize * (current - 1))

    return {
      total: List.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
}
