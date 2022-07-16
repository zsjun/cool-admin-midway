import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
// 对应数据的表,
// 然后会自动在数据库中创建表movie_category
// 里边包含创建时间，更新时间，和描述
@EntityModel('movie_category')
export class MovieCategoryEntity extends BaseEntity {
  @Column({ comment: '分类名称' })
  categoryName: string;
  @Column({ comment: '分类图标' })
  categoryIcon: string;
}
