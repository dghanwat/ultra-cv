import { Component, OnInit, Injector } from '@angular/core';
import { MenuService } from '../../core/menu/menu.service';
import { SettingsService } from '../../core/settings/settings.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menuItems: Array<any>;
    router: Router;

    constructor(private menu: MenuService, public settings: SettingsService, private injector: Injector) {

        this.menuItems = menu.getMenu();

    }

    ngOnInit() {
        this.router = this.injector.get(Router);
    }

    toggleSubmenuClick(event) {
        if (!this.isSidebarCollapsed() && !this.isSidebarCollapsedText() && !this.isEnabledHover()) {
            event.preventDefault();

            let target = $(event.target || event.srcElement || event.currentTarget);
            let ul, anchor = target;

            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a').first();
            }
            ul = anchor.next();

            // hide other submenus
            let parentNav = ul.parents('.sidebar-subnav');
            $('.sidebar-subnav').each((idx, el) => {
                let $el = $(el);
                // if element is not a parent or self ul
                if (!$el.is(parentNav) && !$el.is(ul)) {
                    this.closeMenu($el);
                }
            });

            // abort if not UL to process
            if (!ul.length) {
                return;
            }

            // any child menu should start closed
            ul.find('.sidebar-subnav').each((idx, el) => {
                this.closeMenu($(el));
            });

            // toggle UL height
            if (parseInt(ul.height(), 0)) {
                this.closeMenu(ul);
            }
            else {
                // expand menu
                ul.on('transitionend', () => {
                    ul.height('auto').off('transitionend');
                }).height(ul[0].scrollHeight);
                // add class to manage animation
                ul.addClass('opening');
            }

        }

    }

    // Close menu collapsing height
    closeMenu(elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    }

    toggleSubmenuHover(event) {
        let self = this;
        if (this.isSidebarCollapsed() || this.isSidebarCollapsedText() || this.isEnabledHover()) {
            event.preventDefault();

            $('.nav-floating').remove();

            let target = $(event.target || event.srcElement || event.currentTarget);
            let ul, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a');
            }
            ul = anchor.next();

            let $aside = $('.aside');
            let floatingNav = ul.clone().appendTo($aside);
            let vwHeight = $(window).height();

            let itemTop = anchor.position().top || anchor.offset().top;

            floatingNav
                .removeClass('opening') // necesary for demo if switched between normal//collapsed mode
                .addClass('nav-floating')
                .css({
                    position: /*$rootScope.app.layout.isFixed*/ true ? 'fixed' : 'absolute',
                    top: itemTop,
                    bottom: (floatingNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
                });

            floatingNav
                .on('mouseleave', () => { floatingNav.remove(); })
                .find('a').on('click', function(e) {
                    e.preventDefault(); // prevents page reload on click
                    self.router.navigate([$(this).attr('href')]);
                });

        }

    }

    isSidebarCollapsed() {
        return this.settings.layout.isCollapsed;
    }
    isSidebarCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }
    isEnabledHover() {
        return this.settings.layout.asideHover;
    }
}
