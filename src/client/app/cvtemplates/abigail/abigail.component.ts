import { Component, OnInit , Input } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service'

@Component({
    selector: 'app-template-abigail',
    templateUrl: './abigail.component.html',
    styleUrls: ['./abigail.component.css','./style.css','./responsive.css']
})
export class AbigailComponent implements OnInit {

    @Input() userProfile: any;
    awardImage:any = "/assets/img/awards/";


    constructor(public settings: SettingsService) { }

    ngOnInit() {

    }

}
