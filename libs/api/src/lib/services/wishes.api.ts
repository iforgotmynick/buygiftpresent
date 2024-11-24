import { Injectable } from '@angular/core';
import { CreateWishDto } from '../models/create-wish.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WishDto } from '../models/wish.dto';
import { UpdateWishDto } from '../models/update-wish.dto';

@Injectable({ providedIn: 'root' })
export class WishesApi {
  private readonly API_URL = '/wishes';

  constructor(private readonly http: HttpClient) {}

  create(wish: CreateWishDto): Observable<CreateWishDto> {
    return this.http.post<CreateWishDto>(`${this.API_URL}`, wish);
  }

  getTop(): Observable<WishDto[]> {
    return this.http.get<WishDto[]>(`${this.API_URL}/top`);
  }

  getLast(): Observable<WishDto[]> {
    return this.http.get<WishDto[]>(`${this.API_URL}/last`);
  }

  getById(id: number): Observable<WishDto> {
    return this.http.get<WishDto>(`${this.API_URL}/${id}`);
  }

  update(wish: UpdateWishDto): Observable<UpdateWishDto> {
    return this.http.patch<UpdateWishDto>(`${this.API_URL}/${wish.id}`, wish);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`,);
  }

  copy(wish: UpdateWishDto): Observable<UpdateWishDto> {
    return this.http.post<UpdateWishDto>(`${this.API_URL}/${wish.id}/copy`, wish);
  }
}
