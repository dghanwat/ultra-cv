import { AfterViewChecked, ChangeDetectorRef, Component, ViewEncapsulation, HostBinding, AfterViewInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SettingsService } from './core/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked, AfterViewInit {

  @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.isFixed; };
  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.isCollapsed; };
  @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.isBoxed; };
  @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.layout.useFullLayout; };
  @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.layout.hiddenFooter; };
  @HostBinding('class.layout-h') get horizontal() { return this.settings.layout.horizontal; };
  @HostBinding('class.aside-float') get isFloat() { return this.settings.layout.isFloat; };
  @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.layout.offsidebarOpen; };
  @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.layout.asideToggled; };
  @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.layout.isCollapsedText; };


  constructor(public auth: AuthService,
    private changeDetector: ChangeDetectorRef, public settings: SettingsService) {
      setTimeout(() => { 
        this.startCounter()
      }, 20);
  }

  counter = 0;
  preloader: HTMLElement;
  progressBar: HTMLElement;
  body: HTMLElement;
  


  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    console.log("In after view init of App Component");
    this.preloader = <HTMLElement>document.querySelector('.preloader');
    this.progressBar = <HTMLElement>document.querySelector('.preloader-progress-bar');
    console.log('this.progressBar', this.progressBar)
    this.body = <HTMLElement>document.querySelector('body');
    // this.timeout = setTimeout(this.startCounter, 20);
    // disables scrollbar
    this.body.style.overflow = 'hidden';
    setTimeout(() => { 
      this.endCounter()
    }, 3000);
  }

  startCounter() {
    let remaining = 100 - this.counter;
    this.counter = this.counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));
    this.progressBar.style.width = Math.round(this.counter) + '%';
    setTimeout(() => { 
      this.startCounter()
    }, 20);
  }

  endCounter() {

    // clearTimeout(this.timeout);
    if (!this.progressBar) {
      this.progressBar = <HTMLElement>document.querySelector('.preloader-progress-bar');
    }
    this.progressBar.style.width = '100%';
    setTimeout(() => { 
      // animate preloader hiding
      this.removePreloader();
      // retore scrollbar
      this.body.style.overflow = '';
    }, 300);
    
  }

  removePreloader() {
    this.preloader.addEventListener('transitionend', () => {
      this.preloader.className = 'preloader-hidden';
    });
    this.preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
  };

}
