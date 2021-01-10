import { Component, OnInit } from '@angular/core';
import { faCoffee,faLock, faRss, faFilm , faSearch    } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow, faGithub, faMedium, faFacebook, faTwitter, faPinterest, faDribbble, faVimeo, faYoutube, faInstagram  } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {
  lock = faRss;
   
  vimeo=faVimeo;
  youtube=faYoutube;
  instagram=faInstagram;
  twitter=faTwitter;
  facebook=faFacebook;
  pinterest=faPinterest;
  dribbble=faDribbble;
  search=faSearch;


  constructor() { }

  ngOnInit(): void {
  }

}
