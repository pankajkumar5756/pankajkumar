import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  tooltipPosition: TooltipPosition = 'after';

  rocketImage: any = document.getElementById('rocket') as HTMLImageElement;

  scrollToTopWithDelay(delay: number) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay);
  }


  redirectToLinkdin = (): void => {
    window.open(environment.linkedinLink, '-blank');
  };
  redirectToGmail = (): void => {
    window.open(environment.gmailLink, '-blank');
  };

  redirectToYoutube = () => {
    window.open(environment.youtubeLink, '-blank');
  };

  redirectToNokari = () => {
    window.open(environment.nokariLink, '-blank');
  };

  redirectToGithub = () => {
    window.open(environment.githubLink, '-blank');
  };

  redirectToInsta = () => {
    window.open(environment.whatsappLink, '-blank');
  };

}
