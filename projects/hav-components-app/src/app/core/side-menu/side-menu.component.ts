import {
  IconDefinition,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

interface MenuItem {
  name: string;
  url: string;
}

interface MenuGroup extends MenuItem {
  isExpanded: boolean;
  subMenuItems: MenuItem[];
  defaultFragmentUrl?: string;
  hasAnchors?: boolean;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less'],
  animations: []
})
export class SideMenuComponent implements OnInit {
  menuGroups: MenuGroup[] = [
    {
      name: 'Exempel Meny',
      url: 'getting-started',
      hasAnchors: true,
      isExpanded: true,
      subMenuItems: [
        {
          name: 'Exempel sida 1',
          url: 'installing'
        },
        { name: 'Exempel sida 2', url: 'animations' },
        { name: 'Exempel sida 3', url: 'add-roboto' },
        { name: 'Exempel sida 4', url: 'disable-ivy' },
        {
          name: 'Exempel sida 5',
          url: 'unmet-dependencies'
        },
        {
          name: 'Exempel sida 6',
          url: 'known-issues'
        }
      ]
    }
  ];
  expandIcon: IconDefinition = faChevronRight;
  currentUrl = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url),
        startWith(this.router.url)
      )
      .subscribe((url: string) => {
        this.menuGroups = this.menuGroups.map((group: MenuGroup) =>
          url.includes(group.url) ? { ...group, isExpanded: true } : group
        );
        this.currentUrl = url;
      });
  }

  toggleExpand = (menuGroup: MenuGroup, expand: boolean) => {
    this.menuGroups = this.menuGroups.map((group: MenuGroup) => {
      if (group.name === menuGroup.name) {
        return { ...group, isExpanded: expand || !menuGroup.isExpanded };
      }
      return group;
    });
  };

  onSubItemClick = (groupUrl: string, item: MenuItem) => {
    if (groupUrl === 'getting-started' || groupUrl === 'directives') {
      this.router.navigate([groupUrl], { fragment: item.url });
    } else {
      this.router.navigateByUrl(`${groupUrl}/${item.url}`);
    }
  };
}
