import { Routes } from '@angular/router';
import { MainComponent } from './main.component';


export const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: '../../grocery-modules/dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: 'employee',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: '../../grocery-modules/employee/employee.module#EmployeeModule'
            }
        ]
    },
    {
        path: 'product',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: '../../grocery-modules/product/product.module#ProductModule'
            }
        ]
    },
]