import { Component, OnInit, Input, HostBinding } from '@angular/core';

interface SatelliteCircle {
  position: {
    x: number;
    y: number;
  };
  opacity: number;
}

@Component({
  selector: 'hav-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  @Input() pauseAnimation = false;
  @Input() spinnerSize: 'small' | 'medium' | 'large' = 'medium';
  nbrOfSatellites = 12;
  satelliteCircles: SatelliteCircle[] = [];
  spinnerRadius = 34;
  satelliteRadius = 6;

  @HostBinding('attr.role') role = 'progressbar';

  ngOnInit() {
    this.setSizesOfSpinnerParts();
    this.calculateSatelliteCircleAppearance();
  }

  private setSizesOfSpinnerParts = () => {
    if (this.spinnerSize === 'small') {
      this.nbrOfSatellites = 10;
      this.spinnerRadius = 17;
      this.satelliteRadius = 4;
    } else if (this.spinnerSize === 'large') {
      this.nbrOfSatellites = 14;
      this.spinnerRadius = 68;
      this.satelliteRadius = 12;
    }
  };

  private calculateSatelliteCircleAppearance = () => {
    const radiansPerSatellite = (2 * Math.PI) / this.nbrOfSatellites;
    const opacityStep = 1 / (this.nbrOfSatellites - 2);
    for (let i = 0; i < this.nbrOfSatellites; i++) {
      this.satelliteCircles.push({
        position: {
          x: this.spinnerRadius * Math.sin(Math.PI - i * radiansPerSatellite),
          y: this.spinnerRadius * Math.cos(Math.PI - i * radiansPerSatellite)
        },
        opacity: i === 0 ? 1 : Math.max(i - 2, 0) * opacityStep
      });
    }
  };
}
