import { Example } from '../core/models/example';

export class <%= classify(name) %>Adapter {
  // TODO: data types
  static toModel(dto: any): Example {
    return {
      id: dto.id,
      // TODO: implement
    };
  }
}