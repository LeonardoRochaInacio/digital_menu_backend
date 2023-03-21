export interface IRepositoryWrite<T, Y> 
{
    create(item: T): Promise<Y>;
    update(item: T): Promise<Y>;
    delete(id: string): Promise<Y>;
  }