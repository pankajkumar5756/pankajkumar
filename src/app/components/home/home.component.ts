import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit{
  public isMobile = false;

  private readonly  dataText: { text: string, color: string }[] = [
    { text: "FRONT END DEVELOPER", color: "#c9c92c" },
    { text: "BACK END DEVELOPER", color: "#005ae3" },
    { text: "FULL STACK DEVELOPER", color: "#387b87" },
    { text: "WEB DEVELOPER", color: "#ec424d" },
    { text: "WEB DESIGNER !", color: "#842f61" }
  ];
  private animationInterval: number = 1000;
  private readonly introductoryText: string = "I AM : ";
  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(min-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
    this.StartTextAnimation(0);
  }
 

  private showIntroductoryText(): void {
    const h1 = document.querySelector("h1") as HTMLHeadingElement;
    if (h1) {
      h1.innerHTML = this.introductoryText;
    }
    setTimeout(() => {
      this.StartTextAnimation(0);
    }, 2000); 
  }

  private typeWriter(text: string, color: string, i: number, fnCallback?: () => void): void {
    if (i < text.length) {
      const h1 = document.querySelector("h1") as HTMLHeadingElement;
      if (h1) {
        h1.innerHTML = `${this.introductoryText}<span style="color: ${color};">${text.substring(0, i + 1)}</span><span aria-hidden="true"></span>`;
      }

      setTimeout(() => {
        this.typeWriter(text, color, i + 1, fnCallback);
      }, 100);
    } else if (fnCallback) {
      setTimeout(fnCallback, 1000); 
    }
  }

  private StartTextAnimation(index: number): void {
    if (index < this.dataText.length) {
      const { text, color } = this.dataText[index];
      this.typeWriter(text, color, 0, () => {
        this.StartTextAnimation(index + 1);
      });
    } else {
      setTimeout(() => {
        this.StartTextAnimation(0);
      }, this.animationInterval); 
    }
  }


  redirectToLinkdin = (): void => {
    window.open(environment.linkedinLink, '-blank');
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


  redirectToResume = () => {
    window.location.href = '#resume';
  };

  redirectToAbout = () => {
    window.location.href = '#about';
  };
}
