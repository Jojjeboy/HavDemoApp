import { SideMenuService } from './side-menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  trigger,
  transition,
  group,
  style,
  animate,
  query,
  keyframes,
  state,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('openCloseMenu', [
      transition(':enter', [
        group([
          style({ transform: 'translateX(-100%)' }),
          animate('0.2s cubic-bezier(0.0, 0.0, 0.2, 0.1)')
        ]),
        query('@animateMargin', [animateChild()], { optional: true })
      ]),
      transition(':leave', [
        group([
          animate(
            '0.15s cubic-bezier(0.4, 0.0, 1, 1)',
            keyframes([
              style({ transform: 'translateX(0)' }),
              style({ transform: 'translateX(-100%)' })
            ])
          ),
          query('@animateMargin', [animateChild()], { optional: true })
        ])
      ])
    ]),
    trigger('animateMargin', [
      state('menuOpen', style({ marginLeft: '16rem' })),
      state('menuClosed', style({ marginLeft: 0 })),
      transition('* => menuOpen', [
        animate(
          '0.2s cubic-bezier(0.0, 0.0, 0.2, 0.1)',
          keyframes([style({ marginLeft: 0 }), style({ marginLeft: '16rem' })])
        )
      ]),
      transition('* => menuClosed', [
        animate('0.15s cubic-bezier(0.4, 0.0, 1, 1)', style({ marginLeft: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  sideMenuIsOpen?: boolean;
  private subscription: Subscription;

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit() {
    this.subscription = this.sideMenuService
      .sideMenuIsOpen()
      .subscribe((isOpen: boolean) => (this.sideMenuIsOpen = isOpen));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
