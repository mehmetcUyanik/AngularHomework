import { Injectable } from '@angular/core';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private commentList: Comments[]=
  [
    {
      comment_id: 1,
      post_id: 6,
      user_id: 3,
      comment: "tristique fusce congue diam id ornare imperdiet",
      creation_date: "2023-03-11",
      is_confirmed: false
    },
    {
      comment_id: 2,
      post_id: 40,
      user_id: 7,
      comment: "rutrum at lorem integer tincidunt",
      creation_date: "2021-05-17",
      is_confirmed: false
    },
    {
      comment_id: 3,
      post_id: 50,
      user_id: 4,
      comment: "a odio in hac habitasse platea dictumst maecenas",
      creation_date: "2023-05-10",
      is_confirmed: true
    },
    {
      comment_id: 4,
      post_id: 47,
      user_id: 2,
      comment: "cursus vestibulum proin eu mi nulla ac enim in",
      creation_date: "2021-05-20",
      is_confirmed: true
    },
    {
      comment_id: 5,
      post_id: 1,
      user_id: 6,
      comment: "erat nulla tempus vivamus in felis eu sapien cursus",
      creation_date: "2022-03-21",
      is_confirmed: true
    },
    {
      comment_id: 6,
      post_id: 21,
      user_id: 7,
      comment: "vestibulum rutrum rutrum neque aenean auctor gravida",
      creation_date: "2023-07-02",
      is_confirmed: true
    },
    {
      comment_id: 7,
      post_id: 40,
      user_id: 6,
      comment: "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis",
      creation_date: "2023-05-18",
      is_confirmed: true
    },
    {
      comment_id: 8,
      post_id: 39,
      user_id: 4,
      comment: "laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
      creation_date: "2022-07-03",
      is_confirmed: false
    },
    {
      comment_id: 9,
      post_id: 35,
      user_id: 3,
      comment: "aenean sit amet justo morbi ut",
      creation_date: "2022-08-21",
      is_confirmed: false
    },
    {
      comment_id: 10,
      post_id: 43,
      user_id: 1,
      comment: "lectus pellentesque eget nunc donec quis orci eget orci vehicula",
      creation_date: "2023-06-05",
      is_confirmed: false
    },
    {
      comment_id: 11,
      post_id: 39,
      user_id: 6,
      comment: "pede morbi porttitor lorem id ligula suspendisse",
      creation_date: "2021-06-27",
      is_confirmed: false
    },
    {
      comment_id: 12,
      post_id: 18,
      user_id: 1,
      comment: "eleifend donec ut dolor morbi vel",
      creation_date: "2022-10-08",
      is_confirmed: true
    },
    {
      comment_id: 13,
      post_id: 25,
      user_id: 1,
      comment: "in tempus sit amet sem fusce",
      creation_date: "2022-08-31",
      is_confirmed: true
    },
    {
      comment_id: 14,
      post_id: 50,
      user_id: 1,
      comment: "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
      creation_date: "2021-06-27",
      is_confirmed: false
    },
    {
      comment_id: 15,
      post_id: 19,
      user_id: 4,
      comment: "pede posuere nonummy integer non velit donec diam",
      creation_date: "2021-04-09",
      is_confirmed: false
    },
    {
      comment_id: 16,
      post_id: 27,
      user_id: 2,
      comment: "porta volutpat quam pede lobortis ligula sit",
      creation_date: "2022-12-13",
      is_confirmed: false
    },
    {
      comment_id: 17,
      post_id: 16,
      user_id: 4,
      comment: "nisl nunc rhoncus dui vel",
      creation_date: "2022-02-14",
      is_confirmed: true
    },
    {
      comment_id: 18,
      post_id: 15,
      user_id: 3,
      comment: "rutrum nulla tellus in sagittis",
      creation_date: "2022-08-28",
      is_confirmed: true
    },
    {
      comment_id: 19,
      post_id: 2,
      user_id: 6,
      comment: "erat vestibulum sed magna at nunc commodo placerat",
      creation_date: "2021-07-21",
      is_confirmed: false
    },
    {
      comment_id: 20,
      post_id: 1,
      user_id: 4,
      comment: "sociis natoque penatibus et magnis dis parturient montes",
      creation_date: "2020-07-08",
      is_confirmed: true
    },
    {
      comment_id: 21,
      post_id: 31,
      user_id: 6,
      comment: "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
      creation_date: "2023-02-10",
      is_confirmed: true
    },
    {
      comment_id: 22,
      post_id: 31,
      user_id: 2,
      comment: "praesent blandit nam nulla integer pede justo lacinia",
      creation_date: "2020-11-13",
      is_confirmed: false
    },
    {
      comment_id: 23,
      post_id: 25,
      user_id: 1,
      comment: "in tempor turpis nec euismod scelerisque quam turpis",
      creation_date: "2021-11-28",
      is_confirmed: false
    },
    {
      comment_id: 24,
      post_id: 29,
      user_id: 4,
      comment: "sed magna at nunc commodo placerat praesent blandit",
      creation_date: "2021-07-27",
      is_confirmed: true
    },
    {
      comment_id: 25,
      post_id: 6,
      user_id: 1,
      comment: "nulla ultrices aliquet maecenas leo odio condimentum id luctus",
      creation_date: "2023-01-06",
      is_confirmed: true
    },
    {
      comment_id: 26,
      post_id: 33,
      user_id: 7,
      comment: "nulla sed accumsan felis ut at dolor",
      creation_date: "2022-05-24",
      is_confirmed: false
    },
    {
      comment_id: 27,
      post_id: 12,
      user_id: 1,
      comment: "erat eros viverra eget congue eget semper rutrum",
      creation_date: "2022-06-02",
      is_confirmed: false
    },
    {
      comment_id: 28,
      post_id: 18,
      user_id: 3,
      comment: "sem sed sagittis nam congue risus semper",
      creation_date: "2022-01-05",
      is_confirmed: false
    },
    {
      comment_id: 29,
      post_id: 17,
      user_id: 2,
      comment: "scelerisque mauris sit amet eros suspendisse",
      creation_date: "2022-03-22",
      is_confirmed: true
    },
    {
      comment_id: 30,
      post_id: 48,
      user_id: 4,
      comment: "nunc commodo placerat praesent blandit",
      creation_date: "2020-09-19",
      is_confirmed: true
    },
    {
      comment_id: 31,
      post_id: 17,
      user_id: 7,
      comment: "eget nunc donec quis orci eget orci",
      creation_date: "2022-06-26",
      is_confirmed: true
    },
    {
      comment_id: 32,
      post_id: 9,
      user_id: 5,
      comment: "augue vel accumsan tellus nisi eu orci mauris",
      creation_date: "2021-07-26",
      is_confirmed: false
    },
    {
      comment_id: 33,
      post_id: 11,
      user_id: 2,
      comment: "volutpat dui maecenas tristique est et tempus semper",
      creation_date: "2022-10-14",
      is_confirmed: true
    },
    {
      comment_id: 34,
      post_id: 9,
      user_id: 1,
      comment: "ipsum dolor sit amet consectetuer adipiscing",
      creation_date: "2022-04-21",
      is_confirmed: false
    },
    {
      comment_id: 35,
      post_id: 31,
      user_id: 4,
      comment: "amet lobortis sapien sapien non mi integer ac",
      creation_date: "2022-12-07",
      is_confirmed: false
    },
    {
      comment_id: 36,
      post_id: 46,
      user_id: 2,
      comment: "nam dui proin leo odio porttitor id consequat in consequat",
      creation_date: "2020-11-20",
      is_confirmed: false
    },
    {
      comment_id: 37,
      post_id: 3,
      user_id: 1,
      comment: "neque duis bibendum morbi non",
      creation_date: "2022-01-02",
      is_confirmed: false
    },
    {
      comment_id: 38,
      post_id: 5,
      user_id: 7,
      comment: "ante nulla justo aliquam quis turpis eget elit sodales",
      creation_date: "2022-05-13",
      is_confirmed: true
    },
    {
      comment_id: 39,
      post_id: 23,
      user_id: 1,
      comment: "a libero nam dui proin leo odio porttitor",
      creation_date: "2021-10-27",
      is_confirmed: true
    },
    {
      comment_id: 40,
      post_id: 43,
      user_id: 2,
      comment: "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
      creation_date: "2021-09-05",
      is_confirmed: true
    },
    {
      comment_id: 41,
      post_id: 8,
      user_id: 4,
      comment: "donec odio justo sollicitudin ut",
      creation_date: "2020-10-24",
      is_confirmed: false
    },
    {
      comment_id: 42,
      post_id: 23,
      user_id: 4,
      comment: "nec nisi vulputate nonummy maecenas tincidunt lacus at",
      creation_date: "2022-04-24",
      is_confirmed: false
    },
    {
      comment_id: 43,
      post_id: 18,
      user_id: 7,
      comment: "condimentum id luctus nec molestie sed justo",
      creation_date: "2023-05-26",
      is_confirmed: false
    },
    {
      comment_id: 44,
      post_id: 8,
      user_id: 6,
      comment: "volutpat convallis morbi odio odio elementum eu interdum",
      creation_date: "2021-03-29",
      is_confirmed: true
    },
    {
      comment_id: 45,
      post_id: 10,
      user_id: 1,
      comment: "tempor convallis nulla neque libero convallis eget",
      creation_date: "2022-10-03",
      is_confirmed: false
    },
    {
      comment_id: 46,
      post_id: 48,
      user_id: 5,
      comment: "at feugiat non pretium quis lectus suspendisse potenti in",
      creation_date: "2022-07-17",
      is_confirmed: true
    },
    {
      comment_id: 47,
      post_id: 7,
      user_id: 3,
      comment: "nisl venenatis lacinia aenean sit amet justo morbi ut",
      creation_date: "2022-07-03",
      is_confirmed: false
    },
    {
      comment_id: 48,
      post_id: 11,
      user_id: 7,
      comment: "platea dictumst maecenas ut massa quis augue luctus",
      creation_date: "2020-09-27",
      is_confirmed: false
    },
    {
      comment_id: 49,
      post_id: 2,
      user_id: 2,
      comment: "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
      creation_date: "2021-08-30",
      is_confirmed: false
    },
    {
      comment_id: 50,
      post_id: 21,
      user_id: 7,
      comment: "nulla neque libero convallis eget eleifend luctus ultricies",
      creation_date: "2022-03-14",
      is_confirmed: true
    },
    {
      comment_id: 51,
      post_id: 26,
      user_id: 3,
      comment: "nulla pede ullamcorper augue a suscipit nulla",
      creation_date: "2020-09-03",
      is_confirmed: false
    },
    {
      comment_id: 52,
      post_id: 41,
      user_id: 4,
      comment: "facilisi cras non velit nec",
      creation_date: "2023-03-21",
      is_confirmed: true
    },
    {
      comment_id: 53,
      post_id: 7,
      user_id: 6,
      comment: "consectetuer adipiscing elit proin interdum mauris non",
      creation_date: "2023-02-12",
      is_confirmed: true
    },
    {
      comment_id: 54,
      post_id: 11,
      user_id: 4,
      comment: "volutpat convallis morbi odio odio elementum eu interdum",
      creation_date: "2021-07-08",
      is_confirmed: false
    },
    {
      comment_id: 55,
      post_id: 1,
      user_id: 6,
      comment: "ultricies eu nibh quisque id",
      creation_date: "2022-01-03",
      is_confirmed: false
    },
    {
      comment_id: 56,
      post_id: 41,
      user_id: 7,
      comment: "quam fringilla rhoncus mauris enim leo rhoncus sed",
      creation_date: "2022-10-25",
      is_confirmed: true
    },
    {
      comment_id: 57,
      post_id: 46,
      user_id: 1,
      comment: "tempor convallis nulla neque libero convallis eget eleifend",
      creation_date: "2023-06-05",
      is_confirmed: false
    },
    {
      comment_id: 58,
      post_id: 45,
      user_id: 6,
      comment: "orci luctus et ultrices posuere cubilia curae nulla dapibus",
      creation_date: "2023-03-09",
      is_confirmed: true
    },
    {
      comment_id: 59,
      post_id: 47,
      user_id: 2,
      comment: "felis sed lacus morbi sem mauris laoreet ut rhoncus",
      creation_date: "2021-02-19",
      is_confirmed: true
    },
    {
      comment_id: 60,
      post_id: 5,
      user_id: 7,
      comment: "a nibh in quis justo",
      creation_date: "2023-05-17",
      is_confirmed: false
    },
    {
      comment_id: 61,
      post_id: 42,
      user_id: 4,
      comment: "tempor turpis nec euismod scelerisque quam turpis",
      creation_date: "2020-12-30",
      is_confirmed: false
    },
    {
      comment_id: 62,
      post_id: 20,
      user_id: 7,
      comment: "lectus suspendisse potenti in eleifend quam a odio in",
      creation_date: "2020-10-08",
      is_confirmed: true
    },
    {
      comment_id: 63,
      post_id: 13,
      user_id: 5,
      comment: "turpis nec euismod scelerisque quam",
      creation_date: "2023-05-27",
      is_confirmed: false
    },
    {
      comment_id: 64,
      post_id: 37,
      user_id: 5,
      comment: "ac lobortis vel dapibus at diam nam tristique tortor",
      creation_date: "2020-08-23",
      is_confirmed: true
    },
    {
      comment_id: 65,
      post_id: 27,
      user_id: 7,
      comment: "diam in magna bibendum imperdiet nullam orci",
      creation_date: "2022-09-03",
      is_confirmed: true
    },
    {
      comment_id: 66,
      post_id: 50,
      user_id: 2,
      comment: "non velit nec nisi vulputate",
      creation_date: "2023-02-04",
      is_confirmed: true
    },
    {
      comment_id: 67,
      post_id: 39,
      user_id: 7,
      comment: "donec pharetra magna vestibulum aliquet ultrices erat",
      creation_date: "2020-09-01",
      is_confirmed: false
    },
    {
      comment_id: 68,
      post_id: 8,
      user_id: 6,
      comment: "amet erat nulla tempus vivamus in felis eu",
      creation_date: "2021-10-06",
      is_confirmed: true
    },
    {
      comment_id: 69,
      post_id: 23,
      user_id: 3,
      comment: "eget eleifend luctus ultricies eu nibh quisque id",
      creation_date: "2023-01-19",
      is_confirmed: true
    },
    {
      comment_id: 70,
      post_id: 22,
      user_id: 2,
      comment: "convallis morbi odio odio elementum eu interdum eu tincidunt in",
      creation_date: "2021-01-15",
      is_confirmed: true
    },
    {
      comment_id: 71,
      post_id: 48,
      user_id: 7,
      comment: "condimentum curabitur in libero ut",
      creation_date: "2021-09-07",
      is_confirmed: true
    },
    {
      comment_id: 72,
      post_id: 48,
      user_id: 5,
      comment: "massa id nisl venenatis lacinia aenean sit amet justo morbi",
      creation_date: "2023-01-01",
      is_confirmed: false
    },
    {
      comment_id: 73,
      post_id: 48,
      user_id: 7,
      comment: "ipsum dolor sit amet consectetuer adipiscing elit proin risus",
      creation_date: "2022-07-21",
      is_confirmed: true
    },
    {
      comment_id: 74,
      post_id: 33,
      user_id: 1,
      comment: "risus auctor sed tristique in tempus sit amet sem",
      creation_date: "2021-03-16",
      is_confirmed: false
    },
    {
      comment_id: 75,
      post_id: 40,
      user_id: 4,
      comment: "erat quisque erat eros viverra",
      creation_date: "2022-10-26",
      is_confirmed: true
    },
    {
      comment_id: 76,
      post_id: 9,
      user_id: 2,
      comment: "justo sit amet sapien dignissim",
      creation_date: "2020-07-31",
      is_confirmed: false
    },
    {
      comment_id: 77,
      post_id: 47,
      user_id: 2,
      comment: "nam ultrices libero non mattis pulvinar nulla",
      creation_date: "2023-03-26",
      is_confirmed: true
    },
    {
      comment_id: 78,
      post_id: 4,
      user_id: 1,
      comment: "sapien cursus vestibulum proin eu",
      creation_date: "2022-11-30",
      is_confirmed: false
    },
    {
      comment_id: 79,
      post_id: 42,
      user_id: 2,
      comment: "curabitur convallis duis consequat dui nec",
      creation_date: "2023-05-28",
      is_confirmed: false
    },
    {
      comment_id: 80,
      post_id: 16,
      user_id: 6,
      comment: "proin interdum mauris non ligula pellentesque ultrices phasellus id",
      creation_date: "2022-10-30",
      is_confirmed: false
    },
    {
      comment_id: 81,
      post_id: 31,
      user_id: 4,
      comment: "integer a nibh in quis",
      creation_date: "2021-09-28",
      is_confirmed: false
    },
    {
      comment_id: 82,
      post_id: 9,
      user_id: 6,
      comment: "ligula pellentesque ultrices phasellus id sapien in",
      creation_date: "2021-12-09",
      is_confirmed: true
    },
    {
      comment_id: 83,
      post_id: 32,
      user_id: 3,
      comment: "at velit vivamus vel nulla eget eros elementum pellentesque",
      creation_date: "2021-07-28",
      is_confirmed: true
    },
    {
      comment_id: 84,
      post_id: 24,
      user_id: 1,
      comment: "consequat dui nec nisi volutpat eleifend",
      creation_date: "2022-09-14",
      is_confirmed: false
    },
    {
      comment_id: 85,
      post_id: 41,
      user_id: 4,
      comment: "penatibus et magnis dis parturient montes",
      creation_date: "2020-11-23",
      is_confirmed: false
    },
    {
      comment_id: 86,
      post_id: 9,
      user_id: 5,
      comment: "ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
      creation_date: "2022-10-31",
      is_confirmed: true
    },
    {
      comment_id: 87,
      post_id: 41,
      user_id: 2,
      comment: "eu sapien cursus vestibulum proin eu mi nulla ac enim",
      creation_date: "2022-01-09",
      is_confirmed: false
    },
    {
      comment_id: 88,
      post_id: 29,
      user_id: 1,
      comment: "amet eleifend pede libero quis orci nullam molestie nibh",
      creation_date: "2021-05-26",
      is_confirmed: false
    },
    {
      comment_id: 89,
      post_id: 16,
      user_id: 4,
      comment: "dolor sit amet consectetuer adipiscing elit proin risus",
      creation_date: "2021-02-26",
      is_confirmed: false
    },
    {
      comment_id: 90,
      post_id: 37,
      user_id: 3,
      comment: "praesent blandit nam nulla integer pede",
      creation_date: "2021-10-13",
      is_confirmed: true
    },
    {
      comment_id: 91,
      post_id: 38,
      user_id: 2,
      comment: "orci pede venenatis non sodales sed tincidunt eu felis fusce",
      creation_date: "2020-08-14",
      is_confirmed: true
    },
    {
      comment_id: 92,
      post_id: 46,
      user_id: 4,
      comment: "ultrices posuere cubilia curae donec pharetra magna",
      creation_date: "2020-08-26",
      is_confirmed: true
    },
    {
      comment_id: 93,
      post_id: 6,
      user_id: 1,
      comment: "magna bibendum imperdiet nullam orci pede venenatis non sodales",
      creation_date: "2021-11-27",
      is_confirmed: true
    },
    {
      comment_id: 94,
      post_id: 32,
      user_id: 6,
      comment: "posuere cubilia curae mauris viverra diam vitae quam",
      creation_date: "2021-05-25",
      is_confirmed: true
    },
    {
      comment_id: 95,
      post_id: 2,
      user_id: 1,
      comment: "aliquam convallis nunc proin at turpis a pede",
      creation_date: "2021-04-29",
      is_confirmed: true
    },
    {
      comment_id: 96,
      post_id: 8,
      user_id: 3,
      comment: "consectetuer adipiscing elit proin interdum mauris non",
      creation_date: "2022-08-14",
      is_confirmed: true
    },
    {
      comment_id: 97,
      post_id: 34,
      user_id: 1,
      comment: "accumsan odio curabitur convallis duis",
      creation_date: "2021-05-29",
      is_confirmed: true
    },
    {
      comment_id: 98,
      post_id: 34,
      user_id: 7,
      comment: "rhoncus sed vestibulum sit amet cursus",
      creation_date: "2022-03-19",
      is_confirmed: false
    },
    {
      comment_id: 99,
      post_id: 25,
      user_id: 3,
      comment: "nisl aenean lectus pellentesque eget",
      creation_date: "2021-09-05",
      is_confirmed: false
    },
    {
      comment_id: 100,
      post_id: 6,
      user_id: 7,
      comment: "sagittis nam congue risus semper porta",
      creation_date: "2022-03-12",
      is_confirmed: true
    }
  ]

  getCommentList(): Comments[]{
    return this.commentList;
  }

  constructor() { }
}
