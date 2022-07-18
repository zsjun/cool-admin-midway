import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { MovieCategoryEntity } from '../../entity/category';
/**
 * 描述
 */
// 需要登录权限
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MovieCategoryEntity,
  // 分页查询配置
  pageQueryOp: {
    // 让title字段支持模糊查询
    keyWordLikeFields: ['categoryName'],
  },
})
export class MovieControllerAdminCatogoryController extends BaseController {}
