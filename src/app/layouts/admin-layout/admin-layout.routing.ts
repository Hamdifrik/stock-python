import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TableComponent } from 'app/table/table.component';
import { AddClientComponent } from 'app/addclient/addclient.component';
import { TableCommandeComponent } from 'app/tableCommande/tableCommande.component';

import { AddCommandeComponent } from 'app/addcommande/addcommande.component';
import { EditCommandeComponent } from 'app/editcommande/editcommande.component';
import { AddproduitComponent } from 'app/addproduit/addproduit.component';
import { EditClientComponent } from 'app/editclient/editclient.component';
import { TableProductComponent } from 'app/tableproduit/table.component';

import { EditproduitComponent } from 'app/editproduit/editproduit.component';
import { TablepComponent } from 'app/tablep/table.component';
import { TablecoComponent } from 'app/tableco/table.component';





export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table',     component: TableComponent },
    { path: 'tablecommande',   component: TableCommandeComponent },
    { path: 'tableco',   component: TablecoComponent},
   
   
    { path: 'tableproduit',     component: TableProductComponent },
    { path: 'tablep',     component: TablepComponent},
   
    { path: 'addclient',     component: AddClientComponent},
    { path: 'editclient/:id', component: EditClientComponent },
    { path: 'editcommande/:id', component: EditCommandeComponent },
    { path: 'editproduit/:id', component: EditproduitComponent},

    { path: 'addcommande',     component: AddCommandeComponent},
    { path: 'editproduit',     component: EditCommandeComponent },
    { path: 'addproduit',     component: AddproduitComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
