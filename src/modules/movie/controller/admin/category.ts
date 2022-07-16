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
})
export class MovieControllerAdminCatogoryController extends BaseController {}
