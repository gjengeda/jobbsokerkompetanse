export enum defaultType {
    FAST,
    LEGGES_TIL,
    INGEN
}

export interface TemaModell {
  id: string;
  prioritet: number;
  defaultPosisjon: defaultType;
}