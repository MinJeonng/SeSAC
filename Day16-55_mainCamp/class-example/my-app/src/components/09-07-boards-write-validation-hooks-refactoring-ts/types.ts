export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any; //원래는 백엔드에서 어떤 데이터 주는지 하나하나 입력해야함 -> but 이미 입력된 타입 다운로드 받을 예정!!! 손쉽게
}

export interface IDefaultVariables {
  number: number;
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}
