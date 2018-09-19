import { Component, OnInit } from '@angular/core';
import { CoolDudeComponent } from './../../cvtemplates/cooldude/cooldude.component'
import { UserService } from './../../services/user.service';


@Component({
    selector: 'app-view-cv',
    templateUrl: './viewcv.component.html'
})
export class ViewCVComponent implements OnInit {
    constructor(private userService: UserService) { }
    userProfile: any;
    isLoading = true;

    ngOnInit() {
        if (this.checkCVTemplate()) {
            require("style-loader!./../../../assets/cvstyles/style1.css");
        } else {
            require("style-loader!./../../../assets/cvstyles/style2.css");
        }
        this.getUserProfile();
    }

    checkCVTemplate() {
        return true;
    }

    getUserProfile() {
        this.userService.getUserProfile("aaa").subscribe(
            data => {
                this.userProfile = data
                console.log('User profile', this.userProfile);
            },
            error => console.log(error),
            () => this.isLoading = false
        );
    }
}
