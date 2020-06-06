export enum MessageType {
  Normal = 'Normal',
  Warning = 'Warning',
  Critical = 'Critical'
}

export interface Message {
  id: number;
  content: string;
  type: MessageType;
}
