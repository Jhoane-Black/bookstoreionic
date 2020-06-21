import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {HandleClientComponent} from "@Smarts/handle-client/handle-client.component";
import {ClientFormComponent} from "@Dummies/client-form/client-form.component";
import {SharedModule} from "@Modules/shared/shared.module";


@NgModule({
    declarations: [
        HandleClientComponent,
        ClientFormComponent
    ],
    exports: [
        ClientFormComponent
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        SharedModule
    ]
})
export class ClientModule { }
