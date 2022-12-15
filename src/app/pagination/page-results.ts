
import { Pageable } from "./pageable";

export interface PageResult<T>{
    rate(rate: any): void;
    content: T;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    totalElements: number;
    totalPages: number;
}

export interface APIResponse {
  body: PageResult<any>
  statusCode: string;
  statusCodeValue: number
}