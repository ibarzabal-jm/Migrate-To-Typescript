export enum Status {
    Init = "init",
    Pending = "pending",
    Resolved = "resolved",
    Rejected = "rejected"
  }
  
  export interface Joke {
    id: string;
    value: string;
  }