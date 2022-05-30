//modul A
import _, {Helper, HEIGHT} from 'module' // _ - export default

//or
import {Helper, HEIGHT, default as _} from 'module'   // _ - export default

// moduB
export default function(){/*body*/}
export class Helper{};
export const HEIGHT=200;