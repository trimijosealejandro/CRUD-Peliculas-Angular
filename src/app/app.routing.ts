import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';


const appRoutes = [
{path:'',component:HomeComponent, pathMath:'full'},
{path:'home', component:HomeComponent, pathMath:'full'},
{path:'form', component:FormComponent, pathMath:'full'},
{path:'form/:id', component:FormComponent, pathMath:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
