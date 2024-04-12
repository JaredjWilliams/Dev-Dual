import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Profile} from "../../models/profile";
import {UserService} from "../../../user.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {formatEntries} from "../../utils/utils";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit, OnChanges {

  constructor(
    private userService: UserService,
    private sanitizer : DomSanitizer
  ) { }

  entries : [string, any][] = [];
  avatar : SafeUrl | null = null;

  @Input() profile!: Profile;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profile']) {
      this.entries = formatEntries(Object.entries(this.profile.user));
      this.setAvatar(this.profile.avatarUrl)
    }
  }

  setAvatar(url : string) {
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
