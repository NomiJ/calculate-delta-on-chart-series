import { RouterOutlet } from '@angular/router';
import { EChartsComponent } from './e-charts/e-charts.component';
import {
  Component,
  ViewChild,
} from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chart-demo';
  @ViewChild("mainItemsComponent") EChartsComponent;
  @ViewChild("mainItemsComponent") mainItemsComponent;

  ngOnInit(): void {
    
  }
}
