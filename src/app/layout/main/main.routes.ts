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
                loadChildren: () => import('../../grocery-modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    },
    {
        path: 'employee',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../grocery-modules/employee/employee.module').then(m => m.EmployeeModule)
            }
        ]
    },
    {
        path: 'product',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../grocery-modules/product/product.module').then(m => m.ProductModule)
            }
        ]
    },
    {
        path: 'invoice',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../grocery-modules/invoice/invoice.module').then(m => m.InvoiceModule)
            }
        ]
    },
]