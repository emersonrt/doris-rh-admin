export interface CandidatoDetalhadoResponse {
    id: number; //
    nome: string; //
    dataNascimento: string; //
    telefoneCelular: string; //
    email: string; //
    hardSkills: HardSkill[]; //
    softSkills: SoftSkill[]; //
    formacoes: Formacao[]; //
    linksRelevantes: string[]; //
    cargaHoraria: string; //
    turno: string; //
    modalidadeTrabalho: string; //
    cidadeResidencia: string; //
    disponibilidadeRealocacao: boolean; //
    areaInteresse: string; //
    idiomas: Idioma[]; //
    certificacoes: Certificacao[]; //
    experiencias: Experiencia[];
    pontosFortes: string;
    pontosFracos: string;
    informacaoRelevante: string;
}

interface Certificacao {
    nome: string;
    organizacaoEmissora: string;
    dataEmissao: string;
    urlCodigo: string;
}

interface Experiencia {
    empresaOrganizacao: string;
    tituloCargo: string;
    dataInicio: string;
    dataTermino: string;
    descricao: string;
}

interface Formacao {
    nomeInstituicao: string;
    tipoGraduacao: string;
    nomeCurso: string;
    dataInicio: string;
    dataTermino: string;
}

interface HardSkill {
    habilidade: string;
    tempoExperiencia: number;
}

interface Idioma {
    idioma: string;
    nivelFluencia: string;
}

interface SoftSkill {
    habilidade: string;
}