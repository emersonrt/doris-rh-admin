import { CandidatoTabela } from "../CandidatoTabela";

export interface CandidatoTabelaResponse {
    content: CandidatoTabela[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: SortResponse;
    totalElements: number;
    totalPages: number;
}

export interface Pageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: SortResponse;
    unpaged: boolean;
}

interface SortResponse {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
