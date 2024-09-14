import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
 
  firstPoject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'Spring boot',
    },
    {
      name: 'Oracle',
    },
    {
      name: 'Angular',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'HTML5',
    },
    {
      name: 'CSS3',
    },
    {
      name: 'Aungular Material',
    },
    {
      name: 'Tailwind Css',
    },
    {
      name: 'Gitlab',
    },
    {
      name: 'Figma',
    },
    {
      name: 'adobe',
    },
  ];

  secoundProject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'Spring boot',
    },
    {
      name: 'Angular',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'oracle',
    },
    {
      name: 'HTML5',
    },
    {
      name: 'CSS3',
    },
    {
      name: 'Aungular Material',
    },
    {
      name: 'tailwind css',
    },
    {
      name: 'GIT',
    },
    {
      name: 'figma',
    },
    {
      name: 'adobe',
    },
  ];

  thirdProject: Tools[] = [
    {
      name: 'React js',
    },
    {
      name: 'HTML5',
    },
    {
      name: 'CSS3',
    },
    {
      name: 'SCSS',
    },
    {
      name: 'bootstrap',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Ui material',
    },
  ];
  fourProject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'Spring boot',
    },
    {
      name: 'Oracle',
    },
    {
      name: 'Angular',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'HTML5',
    },
    {
      name: 'CSS3',
    },
    {
      name: 'React js',
    },
    {
      name: 'SCSS',
    },
    {
      name: 'bootstrap',
    },
    {
      name: 'Ui material',
    },
    {
      name: 'Aungular Material',
    },
    {
      name: 'Tailwind Css',
    },
    {
      name: 'Gitlab',
    },
    {
      name: 'Figma',
    },
    {
      name: 'adobe',
    },
    
  ];

  projectOne = () => {
    window.open(environment.projectOne, '_blank');
  };

  projectTwo = () => {
    window.open(environment.projectTwo, '_blank');
  };

  projectThree = () => {
    window.open(environment.projectThree, '_blank');
  };
  projectFour = () => {
    window.open(environment.projectFour, '_blank');
  };
}
