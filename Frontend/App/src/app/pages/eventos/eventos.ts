import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: any;
  }
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class Eventos implements AfterViewInit {

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.loadFacebookSDK();
    }
  }

  loadFacebookSDK(): void {
    if (document.getElementById('facebook-jssdk')) {
      this.renderFacebook();
      return;
    }

    window.fbAsyncInit = () => {
      window.FB.init({
        xfbml: true,
        version: 'v19.0'
      });

      this.renderFacebook();
    };

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v19.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);
  }

  renderFacebook(): void {
    setTimeout(() => {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }, 1000);
  }
}