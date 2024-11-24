import { WishDto } from '@buygiftpresent/api';
import { Wish } from '@buygiftpresent/core';

export class WishlistAdapter {
  static toModel(dto: WishDto): Wish {
    return {
      ...dto
    };
  }
}
