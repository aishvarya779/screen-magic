import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AngularFireModule} from 'angularfire2';
import { FirebaseConfig } from './../firebase.config';
@NgModule({
    imports: [
        SharedModule.forChild(),
        AuthRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig)
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ],
})

export class AuthModule { }
