import { CreateWishDto } from "./create-wish.dto";

export interface UpdateWishDto extends CreateWishDto {
  id: number;
}
