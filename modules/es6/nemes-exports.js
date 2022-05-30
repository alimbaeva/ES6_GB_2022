// любое объявление (declaretion) с прешедствующим словом export является именованным экспортом

// modul1
export const BASE_API = 'https://api';
export class Resolver{}


//module2
import { BASE_API, Resolver} from "modul1";
//или импортировать все
import * as module1 from 'modul1';
console.log(module1.BASE_API); // https: //api