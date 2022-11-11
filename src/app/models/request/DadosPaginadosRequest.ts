import { FiltrosEvent } from "../FiltrosEvent";

export interface DadosPaginadosRequest {
    sort: string;
    sortDirection: string;
    page: number;
    pageSize: number;
    filtros: FiltrosEvent;
}
