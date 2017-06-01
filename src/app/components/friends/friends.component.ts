import { Component, OnInit } from '@angular/core';
import { FriendsService } from './services/friends.service';
import { Friend } from './models/friend';

@Component({
  selector: 'acn-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  providers: [FriendsService]
})
export class FriendsComponent implements OnInit {
  
  public friends: Friend[];
  public selectedFriend: Friend;
  
  constructor(private friendsService: FriendsService) {
  }
  
  public ngOnInit(): void {
    this.loadFriends();
  }
  
  public select(friend: Friend): void {
    this.selectedFriend = friend;
  }
  
  public update(): void {
    this.friendsService.updateFavoriteFriend(this.selectedFriend);
  }
  
  private loadFriends(): void {
    this.friendsService.getFriends().subscribe((res: Friend[]) => {
      this.friends = res;
    });
  }
  
}
