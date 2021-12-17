import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, EmployeeDashbordComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService],
})
export class AppModule {}
