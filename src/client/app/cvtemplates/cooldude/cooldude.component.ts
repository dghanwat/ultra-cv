import { Component, OnInit , Input } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service'

@Component({
    selector: 'app-template-cooldude',
    templateUrl: './cooldude.component.html',
    styleUrls: ['./cooldude.component.css','./uikit.min.css','./progress.min.css']
})
export class CoolDudeComponent implements OnInit {

    @Input() userProfile: any;
    awardImage:any = "/assets/img/awards/";


    constructor(public settings: SettingsService) { }

    ngOnInit() {

    }

}
