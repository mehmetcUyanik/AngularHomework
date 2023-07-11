import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private postList: Posts[]=
  [
    {
      post_id: 1,
      user_id: 3,
      category_id: 3,
      title: "Adaptive",
      viewCount: 31,
      creation_date: "2020-12-23",
      is_published: false
    },
    {
      post_id: 2,
      user_id: 4,
      category_id: 1,
      title: "non-volatile",
      viewCount: 49,
      creation_date: "2020-08-25",
      is_published: true
    },
    {
      post_id: 3,
      user_id: 1,
      category_id: 1,
      title: "budgetary management",
      viewCount: 5,
      creation_date: "2020-12-27",
      is_published: false
    },
    {
      post_id: 4,
      user_id: 5,
      category_id: 1,
      title: "algorithm",
      viewCount: 26,
      creation_date: "2022-11-14",
      is_published: true
    },
    {
      post_id: 5,
      user_id: 4,
      category_id: 3,
      title: "portal",
      viewCount: 20,
      creation_date: "2021-07-31",
      is_published: false
    },
    {
      post_id: 6,
      user_id: 2,
      category_id: 2,
      title: "bottom-line",
      viewCount: 30,
      creation_date: "2021-03-01",
      is_published: true
    },
    {
      post_id: 7,
      user_id: 6,
      category_id: 2,
      title: "Quality-focused",
      viewCount: 30,
      creation_date: "2022-04-23",
      is_published: false
    },
    {
      post_id: 8,
      user_id: 6,
      category_id: 3,
      title: "Organized",
      viewCount: 28,
      creation_date: "2022-10-14",
      is_published: false
    },
    {
      post_id: 9,
      user_id: 7,
      category_id: 1,
      title: "systematic",
      viewCount: 4,
      creation_date: "2022-08-10",
      is_published: false
    },
    {
      post_id: 10,
      user_id: 6,
      category_id: 3,
      title: "tertiary",
      viewCount: 17,
      creation_date: "2022-12-05",
      is_published: true
    },
    {
      post_id: 11,
      user_id: 1,
      category_id: 3,
      title: "task-force",
      viewCount: 20,
      creation_date: "2020-11-14",
      is_published: false
    },
    {
      post_id: 12,
      user_id: 6,
      category_id: 3,
      title: "productivity",
      viewCount: 18,
      creation_date: "2022-01-24",
      is_published: false
    },
    {
      post_id: 13,
      user_id: 6,
      category_id: 1,
      title: "Operative",
      viewCount: 36,
      creation_date: "2020-09-30",
      is_published: true
    },
    {
      post_id: 14,
      user_id: 6,
      category_id: 3,
      title: "multimedia",
      viewCount: 35,
      creation_date: "2022-09-18",
      is_published: true
    },
    {
      post_id: 15,
      user_id: 3,
      category_id: 2,
      title: "zero defect",
      viewCount: 21,
      creation_date: "2022-07-24",
      is_published: true
    },
    {
      post_id: 16,
      user_id: 6,
      category_id: 1,
      title: "protocol",
      viewCount: 42,
      creation_date: "2021-01-28",
      is_published: true
    },
    {
      post_id: 17,
      user_id: 6,
      category_id: 2,
      title: "Open-architected",
      viewCount: 21,
      creation_date: "2022-06-16",
      is_published: false
    },
    {
      post_id: 18,
      user_id: 7,
      category_id: 3,
      title: "Enterprise-wide",
      viewCount: 20,
      creation_date: "2021-05-19",
      is_published: false
    },
    {
      post_id: 19,
      user_id: 5,
      category_id: 2,
      title: "open architecture",
      viewCount: 19,
      creation_date: "2022-10-08",
      is_published: false
    },
    {
      post_id: 20,
      user_id: 3,
      category_id: 2,
      title: "extranet",
      viewCount: 30,
      creation_date: "2022-12-14",
      is_published: false
    },
    {
      post_id: 21,
      user_id: 7,
      category_id: 1,
      title: "Ameliorated",
      viewCount: 39,
      creation_date: "2020-08-06",
      is_published: false
    },
    {
      post_id: 22,
      user_id: 6,
      category_id: 2,
      title: "function",
      viewCount: 47,
      creation_date: "2022-04-06",
      is_published: true
    },
    {
      post_id: 23,
      user_id: 5,
      category_id: 3,
      title: "3rd generation",
      viewCount: 25,
      creation_date: "2023-04-20",
      is_published: true
    },
    {
      post_id: 24,
      user_id: 1,
      category_id: 3,
      title: "Organic",
      viewCount: 37,
      creation_date: "2021-07-05",
      is_published: true
    },
    {
      post_id: 25,
      user_id: 4,
      category_id: 1,
      title: "time-frame",
      viewCount: 7,
      creation_date: "2022-02-24",
      is_published: true
    },
    {
      post_id: 26,
      user_id: 4,
      category_id: 1,
      title: "software",
      viewCount: 7,
      creation_date: "2021-03-14",
      is_published: false
    },
    {
      post_id: 27,
      user_id: 6,
      category_id: 2,
      title: "logistical",
      viewCount: 48,
      creation_date: "2020-08-08",
      is_published: false
    },
    {
      post_id: 28,
      user_id: 7,
      category_id: 3,
      title: "system engine",
      viewCount: 9,
      creation_date: "2020-08-10",
      is_published: false
    },
    {
      post_id: 29,
      user_id: 1,
      category_id: 1,
      title: "Self-enabling",
      viewCount: 9,
      creation_date: "2020-09-23",
      is_published: true
    },
    {
      post_id: 30,
      user_id: 3,
      category_id: 1,
      title: "value-added",
      viewCount: 38,
      creation_date: "2021-07-17",
      is_published: false
    },
    {
      post_id: 31,
      user_id: 2,
      category_id: 2,
      title: "database",
      viewCount: 46,
      creation_date: "2021-12-11",
      is_published: false
    },
    {
      post_id: 32,
      user_id: 3,
      category_id: 1,
      title: "object-oriented",
      viewCount: 2,
      creation_date: "2021-06-12",
      is_published: true
    },
    {
      post_id: 33,
      user_id: 7,
      category_id: 1,
      title: "Implemented",
      viewCount: 2,
      creation_date: "2021-10-23",
      is_published: false
    },
    {
      post_id: 34,
      user_id: 5,
      category_id: 1,
      title: "firmware",
      viewCount: 26,
      creation_date: "2021-10-30",
      is_published: true
    },
    {
      post_id: 35,
      user_id: 1,
      category_id: 2,
      title: "standardization",
      viewCount: 45,
      creation_date: "2023-03-05",
      is_published: true
    },
    {
      post_id: 36,
      user_id: 5,
      category_id: 1,
      title: "real-time",
      viewCount: 37,
      creation_date: "2020-10-06",
      is_published: false
    },
    {
      post_id: 37,
      user_id: 6,
      category_id: 3,
      title: "Sharable",
      viewCount: 24,
      creation_date: "2022-05-17",
      is_published: false
    },
    {
      post_id: 38,
      user_id: 6,
      category_id: 2,
      title: "benchmark",
      viewCount: 23,
      creation_date: "2023-02-17",
      is_published: true
    },
    {
      post_id: 39,
      user_id: 6,
      category_id: 3,
      title: "Reduced",
      viewCount: 24,
      creation_date: "2021-01-13",
      is_published: true
    },
    {
      post_id: 40,
      user_id: 1,
      category_id: 3,
      title: "Vision-oriented",
      viewCount: 26,
      creation_date: "2022-04-17",
      is_published: false
    },
    {
      post_id: 41,
      user_id: 1,
      category_id: 1,
      title: "Realigned",
      viewCount: 40,
      creation_date: "2020-11-25",
      is_published: true
    },
    {
      post_id: 42,
      user_id: 7,
      category_id: 2,
      title: "web-enabled",
      viewCount: 18,
      creation_date: "2022-08-30",
      is_published: true
    },
    {
      post_id: 43,
      user_id: 6,
      category_id: 3,
      title: "secondary",
      viewCount: 40,
      creation_date: "2020-12-24",
      is_published: true
    },
    {
      post_id: 44,
      user_id: 7,
      category_id: 1,
      title: "3rd generation",
      viewCount: 3,
      creation_date: "2020-07-26",
      is_published: false
    },
    {
      post_id: 45,
      user_id: 4,
      category_id: 1,
      title: "capability",
      viewCount: 27,
      creation_date: "2021-03-29",
      is_published: false
    },
    {
      post_id: 46,
      user_id: 2,
      category_id: 2,
      title: "zero administration",
      viewCount: 21,
      creation_date: "2021-10-12",
      is_published: true
    },
    {
      post_id: 47,
      user_id: 6,
      category_id: 3,
      title: "Reduced",
      viewCount: 6,
      creation_date: "2023-02-22",
      is_published: false
    },
    {
      post_id: 48,
      user_id: 7,
      category_id: 1,
      title: "object-oriented",
      viewCount: 2,
      creation_date: "2022-03-18",
      is_published: false
    },
    {
      post_id: 49,
      user_id: 5,
      category_id: 1,
      title: "mobile",
      viewCount: 34,
      creation_date: "2020-08-19",
      is_published: true
    },
    {
      post_id: 50,
      user_id: 4,
      category_id: 1,
      title: "Re-engineered",
      viewCount: 23,
      creation_date: "2020-11-26",
      is_published: false
    }
  ]

  getPostList(): Posts[]{
    return this.postList;
  }

  constructor() { }

  getPostItem(post_id: number): Posts | undefined {
    
    return this.postList.find((_post: Posts) => {
      return _post.post_id === Number(post_id);
    });
  }
}
