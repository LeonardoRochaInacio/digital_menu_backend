export interface IRepositoryWrite<T, Y> 
{
    create(item: T): Promise<Y>;
    update(item: T): Promise<Y>;
    delete(id: number): Promise<Y>;
  }