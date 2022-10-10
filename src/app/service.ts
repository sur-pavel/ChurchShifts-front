import {Servant} from "./servant";
import {Holiday} from "./holiday";

export interface Service {
    id?:string;
    time?:string;
    serviceType?:boolean;
    servants?:Servant[];
    holidays?:Holiday[];
   }
