import { Component, OnInit } from '@angular/core';
import { PostDetails } from './post-details';
import { PostDetailsService } from './post-details.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{


  postDetailsList: PostDetails[]=[];

  constructor(private postDetailsService: PostDetailsService){}

  ngOnInit(): void {
    this.postDetailsList = this.postDetailsService.getPostDetailsList();
  }

}
