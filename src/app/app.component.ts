import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  src = ['https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png', 'http://cdn.newsapi.com.au/image/v1/9fdbf585d17c95f7a31ccacdb6466af9', 'http://atgbcentral.com/data/out/94/4753699-picture.jpg', 'http://kb4images.com/images/picture/37944388-picture.jpg'];
  
  
  onNewComponentClick(source: string) {
    this.src[0] = source;
 }
}
