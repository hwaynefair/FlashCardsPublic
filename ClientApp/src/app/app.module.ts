import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from '@angular/common/http';
import { AddCardComponent } from './add-card/add-card.component';
import { DocardsComponent } from './docards/docards.component'
import {DataService} from './services/data.service'
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNotifierModule } from 'ngx-notifier';
import { MytoasterComponent } from './mytoaster/mytoaster.component';
import { myToasterService } from './services/mytoaster.service';
import {MatSnackBarModule, MatList} from "@angular/material";
import { MatDialogModule } from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MyDialogComponent} from './my-dialog/my-dialog.component'
import {MatTableModule, MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatTooltipModule} from '@angular/material';
import { GetreportComponent } from './getreport/getreport.component'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { EditcardsComponent } from './editcards/editcards.component';
@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    DocardsComponent,
    MytoasterComponent,
    MyDialogComponent,
    GetreportComponent,
    EditcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxNotifierModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    NgxNotifierModule ,
    MatTabsModule,
    MatIconModule, MatListModule
    ,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule,MatTooltipModule,MatTableModule 
  ],
  entryComponents:[MyDialogComponent],
  providers: [DataService,myToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
