import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
imgLogo !: string;
isCollapsed = false;
myNavBar: string = 'myNavBar';

constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) {}

ngOnInit(): void {
    this.imgLogo = "pictures/logo.png";
    if(isPlatformBrowser(this.platformId)){
      console.log('Initialisation listener de défilement');
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
}

onScroll():void{
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  console.log('Position : ', scrollPosition);

  if(scrollPosition > 50){
    console.log('Changement à opaque-nav');
    this.myNavBar = 'opaque-nav';
  }else{
    console.log('Retour à la normal');
    this.myNavBar = 'myNavBar';
  }
}

toogleNavbar(){
  this.isCollapsed =!this.isCollapsed;
}


}
