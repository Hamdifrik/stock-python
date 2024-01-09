import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { TableComponent } from 'app/table/table.component';
import { AddClientComponent } from 'app/addclient/addclient.component';

import { TableCommandeComponent } from 'app/tableCommande/tableCommande.component';
import { AddproduitComponent } from 'app/addproduit/addproduit.component';
import { EditproduitComponent } from 'app/editproduit/editproduit.component';
import { EditClientComponent } from 'app/editclient/editclient.component';
import { EditCommandeComponent } from 'app/editcommande/editcommande.component';
import { TablepComponent } from 'app/tablep/table.component';
import { TablecoComponent } from 'app/tableco/table.component';
import { CommandeDetailsDialogComponent } from 'app/commande-details-dialog/commande-details.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TableComponent,
    TableCommandeComponent,
    AddClientComponent,
     TablepComponent,
     TablecoComponent,
  
  
    EditClientComponent,
    EditCommandeComponent,
    CommandeDetailsDialogComponent,


    AddproduitComponent,
    EditproduitComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
