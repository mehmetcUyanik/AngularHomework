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
      is_published: false,
      content: "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est"
    },
    {
      post_id: 2,
      user_id: 4,
      category_id: 1,
      title: "non-volatile",
      viewCount: 49,
      creation_date: "2020-08-25",
      is_published: true,
      content: "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin"
    },
    {
      post_id: 3,
      user_id: 1,
      category_id: 1,
      title: "budgetary management",
      viewCount: 5,
      creation_date: "2020-12-27",
      is_published: false,
      content: "non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in"
    },
    {
      post_id: 4,
      user_id: 5,
      category_id: 1,
      title: "algorithm",
      viewCount: 26,
      creation_date: "2022-11-14",
      is_published: true,
      content : "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa"
    },
    {
      post_id: 5,
      user_id: 4,
      category_id: 3,
      title: "portal",
      viewCount: 20,
      creation_date: "2021-07-31",
      is_published: false,
      content: "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin"
    },
    {
      post_id: 6,
      user_id: 2,
      category_id: 2,
      title: "bottom-line",
      viewCount: 30,
      creation_date: "2021-03-01",
      is_published: true,
      content: "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec"
    },
    {
      post_id: 7,
      user_id: 6,
      category_id: 2,
      title: "Quality-focused",
      viewCount: 30,
      creation_date: "2022-04-23",
      is_published: false,
      content: "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra"
    },
    {
      post_id: 8,
      user_id: 6,
      category_id: 3,
      title: "Organized",
      viewCount: 28,
      creation_date: "2022-10-14",
      is_published: false,
      content: "leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus"
    },
    {
      post_id: 9,
      user_id: 7,
      category_id: 1,
      title: "systematic",
      viewCount: 4,
      creation_date: "2022-08-10",
      is_published: false,
      content: "cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere"
    },
    {
      post_id: 10,
      user_id: 6,
      category_id: 3,
      title: "tertiary",
      viewCount: 17,
      creation_date: "2022-12-05",
      is_published: true,
      content: "ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus"
    },
    {
      post_id: 11,
      user_id: 1,
      category_id: 3,
      title: "task-force",
      viewCount: 20,
      creation_date: "2020-11-14",
      is_published: false,
      content: "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in"
    },
    {
      post_id: 12,
      user_id: 6,
      category_id: 3,
      title: "productivity",
      viewCount: 18,
      creation_date: "2022-01-24",
      is_published: false,
      content: "leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed"
    },
    {
      post_id: 13,
      user_id: 6,
      category_id: 1,
      title: "Operative",
      viewCount: 36,
      creation_date: "2020-09-30",
      is_published: true,
      content: "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim"
    },
    {
      post_id: 14,
      user_id: 6,
      category_id: 3,
      title: "multimedia",
      viewCount: 35,
      creation_date: "2022-09-18",
      is_published: true,
      content: "quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui"
    },
    {
      post_id: 15,
      user_id: 3,
      category_id: 2,
      title: "zero defect",
      viewCount: 21,
      creation_date: "2022-07-24",
      is_published: true,
      content: "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi"
    },
    {
      post_id: 16,
      user_id: 6,
      category_id: 1,
      title: "protocol",
      viewCount: 42,
      creation_date: "2021-01-28",
      is_published: true,
      content: "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in"
    },
    {
      post_id: 17,
      user_id: 6,
      category_id: 2,
      title: "Open-architected",
      viewCount: 21,
      creation_date: "2022-06-16",
      is_published: false,
      content: "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci"
    },
    {
      post_id: 18,
      user_id: 7,
      category_id: 3,
      title: "Enterprise-wide",
      viewCount: 20,
      creation_date: "2021-05-19",
      is_published: false,
      content: "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam"
    },
    {
      post_id: 19,
      user_id: 5,
      category_id: 2,
      title: "open architecture",
      viewCount: 19,
      creation_date: "2022-10-08",
      is_published: false,
      content: "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo"
    },
    {
      post_id: 20,
      user_id: 3,
      category_id: 2,
      title: "extranet",
      viewCount: 30,
      creation_date: "2022-12-14",
      is_published: false,
      content: "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi"
    },
    {
      post_id: 21,
      user_id: 7,
      category_id: 1,
      title: "Ameliorated",
      viewCount: 39,
      creation_date: "2020-08-06",
      is_published: false,
      content: "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum"
    },
    {
      post_id: 22,
      user_id: 6,
      category_id: 2,
      title: "function",
      viewCount: 47,
      creation_date: "2022-04-06",
      is_published: true,
      content: "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec"
    },
    {
      post_id: 23,
      user_id: 5,
      category_id: 3,
      title: "3rd generation",
      viewCount: 25,
      creation_date: "2023-04-20",
      is_published: true,
      content: "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies"
    },
    {
      post_id: 24,
      user_id: 1,
      category_id: 3,
      title: "Organic",
      viewCount: 37,
      creation_date: "2021-07-05",
      is_published: true,
      content: "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis"
    },
    {
      post_id: 25,
      user_id: 4,
      category_id: 1,
      title: "time-frame",
      viewCount: 7,
      creation_date: "2022-02-24",
      is_published: true,
      content: "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit"
    },
    {
      post_id: 26,
      user_id: 4,
      category_id: 1,
      title: "software",
      viewCount: 7,
      creation_date: "2021-03-14",
      is_published: false,
      content: "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"
    },
    {
      post_id: 27,
      user_id: 6,
      category_id: 2,
      title: "logistical",
      viewCount: 48,
      creation_date: "2020-08-08",
      is_published: false,
      content: "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas"
    },
    {
      post_id: 28,
      user_id: 7,
      category_id: 3,
      title: "system engine",
      viewCount: 9,
      creation_date: "2020-08-10",
      is_published: false,
      content: "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate"
    },
    {
      post_id: 29,
      user_id: 1,
      category_id: 1,
      title: "Self-enabling",
      viewCount: 9,
      creation_date: "2020-09-23",
      is_published: true,
      content: "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi"
    },
    {
      post_id: 30,
      user_id: 3,
      category_id: 1,
      title: "value-added",
      viewCount: 38,
      creation_date: "2021-07-17",
      is_published: false,
      content: "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit"
    },
    {
      post_id: 31,
      user_id: 2,
      category_id: 2,
      title: "database",
      viewCount: 46,
      creation_date: "2021-12-11",
      is_published: false,
      content: "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor"
    },
    {
      post_id: 32,
      user_id: 3,
      category_id: 1,
      title: "object-oriented",
      viewCount: 2,
      creation_date: "2021-06-12",
      is_published: true,
      content: "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere"
    },
    {
      post_id: 33,
      user_id: 7,
      category_id: 1,
      title: "Implemented",
      viewCount: 2,
      creation_date: "2021-10-23",
      is_published: false,
      content: "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor"
    },
    {
      post_id: 34,
      user_id: 5,
      category_id: 1,
      title: "firmware",
      viewCount: 26,
      creation_date: "2021-10-30",
      is_published: true,
      content: "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet"
    },
    {
      post_id: 35,
      user_id: 1,
      category_id: 2,
      title: "standardization",
      viewCount: 45,
      creation_date: "2023-03-05",
      is_published: true,
      content: "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus"
    },
    {
      post_id: 36,
      user_id: 5,
      category_id: 1,
      title: "real-time",
      viewCount: 37,
      creation_date: "2020-10-06",
      is_published: false,
      content: "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est"
    },
    {
      post_id: 37,
      user_id: 6,
      category_id: 3,
      title: "Sharable",
      viewCount: 24,
      creation_date: "2022-05-17",
      is_published: false,
      content: "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend"
    },
    {
      post_id: 38,
      user_id: 6,
      category_id: 2,
      title: "benchmark",
      viewCount: 23,
      creation_date: "2023-02-17",
      is_published: true,
      content: "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id"
    },
    {
      post_id: 39,
      user_id: 6,
      category_id: 3,
      title: "Reduced",
      viewCount: 24,
      creation_date: "2021-01-13",
      is_published: true,
      content: "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis"
    },
    {
      post_id: 40,
      user_id: 1,
      category_id: 3,
      title: "Vision-oriented",
      viewCount: 26,
      creation_date: "2022-04-17",
      is_published: false,
      content: "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet"
    },
    {
      post_id: 41,
      user_id: 1,
      category_id: 1,
      title: "Realigned",
      viewCount: 40,
      creation_date: "2020-11-25",
      is_published: true,
      content: "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus"
    },
    {
      post_id: 42,
      user_id: 7,
      category_id: 2,
      title: "web-enabled",
      viewCount: 18,
      creation_date: "2022-08-30",
      is_published: true,
      content: "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla"
    },
    {
      post_id: 43,
      user_id: 6,
      category_id: 3,
      title: "secondary",
      viewCount: 40,
      creation_date: "2020-12-24",
      is_published: true,
      content: "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in"
    },
    {
      post_id: 44,
      user_id: 7,
      category_id: 1,
      title: "3rd generation",
      viewCount: 3,
      creation_date: "2020-07-26",
      is_published: false,
      content: "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in"
    },
    {
      post_id: 45,
      user_id: 4,
      category_id: 1,
      title: "capability",
      viewCount: 27,
      creation_date: "2021-03-29",
      is_published: false,
      content: "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien"
    },
    {
      post_id: 46,
      user_id: 2,
      category_id: 2,
      title: "zero administration",
      viewCount: 21,
      creation_date: "2021-10-12",
      is_published: true,
      content: "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci"
    },
    {
      post_id: 47,
      user_id: 6,
      category_id: 3,
      title: "Reduced",
      viewCount: 6,
      creation_date: "2023-02-22",
      is_published: false,
      content: "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor"
    },
    {
      post_id: 48,
      user_id: 7,
      category_id: 1,
      title: "object-oriented",
      viewCount: 2,
      creation_date: "2022-03-18",
      is_published: false,
      content: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus"
    },
    {
      post_id: 49,
      user_id: 5,
      category_id: 1,
      title: "mobile",
      viewCount: 34,
      creation_date: "2020-08-19",
      is_published: true,
      content: "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna"
    },
    {
      post_id: 50,
      user_id: 4,
      category_id: 1,
      title: "Re-engineered",
      viewCount: 23,
      creation_date: "2020-11-26",
      is_published: false,
      content: "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec"
    }
  ]

  constructor() { }

  getPostList(): Posts[]{
    return this.postList;
  }

  addNewPost(newPost: Posts): void {
    this.postList.push(newPost);
  }

  getPostItem(post_id: number): Posts | undefined {
    
    return this.postList.find((_post: Posts) => {
      return _post.post_id === Number(post_id);
    });
  }

  updatePost1(post: Posts, id: number){
    for(let i=0;i<this.postList.length;i++){
      if(this.postList[i].post_id === id){

        this.postList[i]=post;
      }
    }
  }

  getPostContent(id: number):Posts{
    return this.postList.find((post) => post.post_id === id)!
  }

  deletePost(id: number){
    const postIndex = this.postList.findIndex((_post: Posts) => {
      return _post.post_id === Number(id);
    })
    this.postList.splice(postIndex, 1);
  }


}
