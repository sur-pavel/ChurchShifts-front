import {Service} from "./service";

export interface Week {
    id?: string | number;
    name?: string;
    services:Service[]
}
