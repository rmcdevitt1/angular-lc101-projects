import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rose-peach.jpg?itok=hnIK5mr5';
  image3 = 'https://www.burpee.com/media/catalog/product/cache/f822b5c8450580a710acfcf9cd4f8045/9/5/952d133b5e02f71d89be303e1409dacbd77a3ae1cd2f02ec19d7fc3250241e0d.jpeg';

  constructor() { }

  ngOnInit() {
  }

}