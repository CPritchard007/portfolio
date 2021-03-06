import { Component, OnInit } from '@angular/core';
export interface MilestoneProject {
  name: string;
  image: string;
  description: string;
  language: string;
}
@Component({
  selector: 'app-milestone-projects',
  templateUrl: './milestone-projets.component.html',
  styleUrls: ['./milestone-projets.component.scss']
})
export class MilestoneProjetsComponent implements OnInit {
  milestoneProjects: MilestoneProject[]
  constructor() { }

  ngOnInit() {
    this.milestoneProjects = [
      {name: 'TypeKnights', description: 'TypeKnight was I game I worked on in Java, with my partner David froelich. This game utilizes the use of the keyboard in/out functionality into a fun little typing rpg. xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxx xxxxxxx xxxxxx xxxxxxxx xxxxxx', image: 'https://www.researchgate.net/profile/Laurianne_Sitbon/publication/41201766/figure/fig5/AS:669565243641859@1536648202119/Process-of-random-projection-to-compute-term-and-documents-matrices.png', language: 'java'},
      {name: 'Portfolio', description: 'This is the Portfolio Description', image: 'https://www.researchgate.net/profile/Laurianne_Sitbon/publication/41201766/figure/fig5/AS:669565243641859@1536648202119/Process-of-random-projection-to-compute-term-and-documents-matrices.png', language: 'java'},
      {name: 'Android', description: 'This is the Portfolio Description', image: 'https://www.researchgate.net/profile/Laurianne_Sitbon/publication/41201766/figure/fig5/AS:669565243641859@1536648202119/Process-of-random-projection-to-compute-term-and-documents-matrices.png', language: 'java'},
      {name: 'First Robotics assistant-programmer', description: 'I currently assist the Tecumseh vista robotics programming team. I lend them my knowlege of Java, Python and RaspbianLite so that they may be able to complete a functioning robot for the coming competitions.', image: 'https://www.researchgate.net/profile/Laurianne_Sitbon/publication/41201766/figure/fig5/AS:669565243641859@1536648202119/Process-of-random-projection-to-compute-term-and-documents-matrices.png', language: 'java'}
    ];
  }

}
