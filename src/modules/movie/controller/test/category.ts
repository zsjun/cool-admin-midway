import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { MovieCategoryEntity } from '../../entity/category';
/**
 * 描述
 */
// 这里会拼接为 /test/movie/category/add
// 如果测试add接口，必须设置content-type:"application/json; charset=utf-8"
// 除了info是get方法
// 其它都是post方法
// add {categoryName:"sdd", categoryIcon:"www.baidu.com"}
// delete {ids:[3]}
// update {
//     "categoryName": "111222",
//     "categoryIcon": "www.baidu.com",
//     "id":5
// }
// info get  info?=1
// list
// page
// {
//   page:1,
//   size:20
// }
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  // 引入的实体
  entity: MovieCategoryEntity,
})
export class MovieControllerTestCatogoryController extends BaseController {}
