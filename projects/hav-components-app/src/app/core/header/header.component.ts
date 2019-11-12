import { SideMenuService } from '../../side-menu.service';
import { Component } from '@angular/core';
import { version } from '../../../../../hav-components/package.json';
import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  latestVersion = version;
  menuIcon: IconDefinition = faBars;

  constructor(private sideMenuService: SideMenuService) {}

  toggleSideMenu = () => {
    this.sideMenuService.toggleSideMenu();
  };
}
