export class Data {
  id: number;
  type: string;
  series: ISeries;
}


export interface ISeries {
  name: string;
  y: number;
  sliced?: boolean;
  selected?: boolean;
}
