export class ProdutoDTO {
  Codigo: number;

  Referencia: string;

  Cor: number;

  Descricao: string;

  DescricaoComplemento: string;

  Datainc: Date;

  CodigoBarra: string;

  Ncm: string;

  Tipo: number;

  Fabricante: number;

  DataAlteracao: Date;
  constructor({
    Codigo: pCodigo,
    Referencia: pReferencia,
    Cor: pCor,
    Descricao: pDescricao,
    DescricaoComplemento: pDescricaoComplemento,
    Datainc: pDataInc,
    CodigoBarra: pCodigoBarra,
    Ncm: pNcm,
    Tipo: pTipo,
    Fabricante: pFabricante,
    DataAlteracao: pDataAlteracao,
  }: {
    Codigo: number;
    Referencia: string;
    Cor: number;
    Descricao: string;
    DescricaoComplemento: string;
    Datainc: Date;
    CodigoBarra: string;
    Ncm: string;
    Tipo: number;
    Fabricante: number;
    DataAlteracao: Date;
  }) {
    this.Codigo = pCodigo;
    this.Referencia = pReferencia;
    this.Cor = pCor;
    this.Descricao = pDescricao;
    this.DescricaoComplemento = pDescricaoComplemento;
    this.Datainc = pDataInc;
    this.CodigoBarra = pCodigoBarra;
    this.Ncm = pNcm;
    this.Tipo = pTipo;
    this.Fabricante = pFabricante;
    this.DataAlteracao = pDataAlteracao;
  }

  static fromMapDB(map: Record<string, any>) {
    return new ProdutoDTO({
      Codigo: map['PRO_CODIGO'],
      Cor: map['PRO_COR'],
      Referencia: map['PRO_REFERENCIA'],
      Descricao: map['PRO_DESCRICAO'],
      DescricaoComplemento: map['PRO_DESCRICAO_COMPLEMENTO'],
      Datainc: map['PRO_DATA_INC'],
      CodigoBarra: map['PRO_CODIGOBARRA'],
      Ncm: map['PRO_NCM'],
      Tipo: map['PRO_TIPO'],
      Fabricante: map['PRO_FABRICANTE'],
      DataAlteracao: map['PRO_DATA_ALTERACAO'],
    });
  }
}
