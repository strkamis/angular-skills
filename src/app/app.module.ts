import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
} from "@angular/material";
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { CardComponent } from "./dashboard/card/card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FakeApiService } from "./fake-api.service";
import { HelloComponent } from "./hello.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDividerModule,
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    CardComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
