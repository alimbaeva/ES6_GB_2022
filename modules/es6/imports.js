// именнованые ипорты (А)
import {name} from 'module';

// псевдонимы для импортов (В)
import {name as uniqName} from 'module';

// импортирование всех экспортируемых значений (С)
import * as lib from 'module';

// импортирование по умолчанию (D)
import name  from 'module';
// or
import {default as name} from 'module';

// импорт всего модуля, вы не импортируете никаких значений а просто выполните тело модуля (F)
import 'module';