import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Profile} from "../../models/profile";
import {UserService} from "../../../user.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnChanges {
  entries : [string, any][] = [];
  avatar : SafeUrl | null = null;

  constructor(
    private userService: UserService,
    private sanitizer : DomSanitizer
  ) {

  }

  @Input() profile!: Profile;



  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profile']) {
      this.entries = Object.entries(this.profile.user);
      this.setAvatar(this.profile.avatarUrl)
    }
    console.log(this.entries);
  }

  setAvatar(url : string) {
    console.log(url)
    this.userService.getAvatar(url).subscribe({
      next: (data) => {
        let url = URL.createObjectURL(data);
        this.avatar = this.sanitizer.bypassSecurityTrustUrl(url)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
