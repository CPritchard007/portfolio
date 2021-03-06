import {Component, Input, OnInit} from '@angular/core';

export interface MenuItems {
  name: string;
  icon?: string;
  ref: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() screenSize: string;
  menuItemsList: MenuItems[];
  constructor() {
    this.menuItemsList = [ {
      name: 'About',
      icon: 'face',
      ref: '#aboutMe'
    }, {
      name: 'Languages',
      icon: 'code',
      ref: '#languages'
    }, {
      name: 'GitHUB',
      icon: '../assets/menu-icons/github-face.svg',
      ref: '#GitHUB'
    }, {
       name: 'Contact Me',
        ref: '#contact',
       icon: 'phone'
      },
       {
        name: 'Milestones',
        ref: '#Milestone',
        icon: 'phone'
      }];

  }

  ngOnInit() {
  }

  getTypeOf(icon: string) {
    if (icon.includes('.')) {
      console.log(icon);
      return 'image';
    } else {
      console.log('material')
      return 'material';

    }
  }
}
