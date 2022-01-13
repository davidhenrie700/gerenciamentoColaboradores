import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LocalDatePipe } from './shared/pipe/local-date.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EnderecoComponent } from './endereco/endereco.component';
import { ColaboradoresFormComponent } from './colaboradores/colaboradores-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LocalDatePipe,
    DialogSuccessComponent,
    EnderecoComponent,
    ColaboradoresFormComponent,
    HomeComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [
    LocalDatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
