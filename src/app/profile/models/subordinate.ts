export interface Subordinate {
  ID: string;
  name: string;
  responsibleName: string;
  responsibleImage: string;
  subordinates: number;
}

export interface Subordinates {
  code: string;
  message: string;
  data: Subordinate[];
}
