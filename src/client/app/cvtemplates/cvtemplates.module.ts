import { NgModule } from '@angular/core';

import { CoolDudeComponent } from './cooldude/cooldude.component';
import { AbigailComponent } from './abigail/abigail.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        
    ],
    declarations: [
        CoolDudeComponent,
        AbigailComponent
    ],
    exports: [
        CoolDudeComponent,
        AbigailComponent
    ]
})
export class CVTemplatesModule { }
