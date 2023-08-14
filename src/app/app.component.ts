import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PrimeNGConfig],
})
export class AppComponent {
  private primengConfig = inject(PrimeNGConfig);

  title = 'prime';

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
