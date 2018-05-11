import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.addEventListener('scroll', this.onScroll)
  }

  onScroll(): void {
  	const nav = document.getElementById('navigation')
  	nav.classList.add('scrolling')
  	let timer = null;
  	if (timer !== null) {
  		clearTimeout(timer)
  	}

  	timer = setTimeout(() => {
  		nav.classList.remove('scrolling')
  	} 800)
  }

}
