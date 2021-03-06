import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {Router} from '@angular/router';
import {animateLogo, animateText, onMainContentChange, onSideNavChange} from './animation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange, animateLogo],
})
export class NavigationComponent implements OnInit {

  menuItems: any = [];
  authItems: any;
  opened: boolean;
  userInfo: any;
  open = true;
  @ViewChild('drawer') drawer: MatDrawer;
  public sideNavState = true;
  public linkText = true;

  // isHandset$: Observable<boolean> = this.breakpointObserver
  //   .observe(Breakpoints.Handset)
  //   .pipe(map(result => result.matches));

  constructor(private router: Router) {
    // manage multiple roles with concat menuItems to unique
    this.authItems = [
      {
        title: 'MENU.PROFILE',
      },
      {
        title: 'MENU.LOGOUT',
      },
    ];
  }

  addITemToMenuIfNotAlreadyExist(title, icon, srcSvg, link) {
    // si le lien est déjà dans le menu
    if (
      this.menuItems.findIndex(menu => {
        return menu.link === link && menu.title === title;
      }) >= 0
    ) {
      return false;
    }

    this.menuItems.push({
      title,
      icon,
      srcSvg,
      link,
    });
  }

  async ngOnInit() {

    this.addITemToMenuIfNotAlreadyExist(
      'Login',
      'fa-sign-in-alt',
      '../../../../assets/icons/calendrier admin.svg',
      '/auth/login',
    );
    this.addITemToMenuIfNotAlreadyExist(
      'Manga',
      'fa-book',
      '../../../../assets/icons/calendrier admin.svg',
      '/manga/list',
    );
    this.addITemToMenuIfNotAlreadyExist(
      'Home',
      'fa-home',
      '../../../../assets/icons/calendrier admin.svg',
      '/',
    );
  }

  disconnect() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  onSideNavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 75);
  }



}
