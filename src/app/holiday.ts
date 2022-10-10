import {Service} from "./service";

export interface Holiday {
    id?:string;
    displayName?:string;
    isChurchDevoted?:boolean;
    color?:string;
    services?:Service[];
   }

