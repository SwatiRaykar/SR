import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/APIServices/auth.service';
import { ProductsService } from 'src/app/APIServices/products.service';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  profileImagePath: string = '../../assets/Images/swati3.jpg';

  experience = [
    { 
      year: '2024', 
      title: 'AR/VR Developer', 
      company: 'TRON Softech Pvt. Ltd. (September, 2024 - Present)', 
      description: `- Developed immersive VR experience using Unity, integrating haptic feedback, teleportation mechanics, and socket interactions to enhance user engagement.</br>
    - Engineered XR Rig setups with full-body tracking using Meta Movement SDK, enhancing realism and immersion through precise avatar control.</br>
    - Implemented complex interaction systems including raycasting, object manipulation, and gesture recognition for intuitive user experiences.</br>
    - Created and optimized shaders, visual effects, and lighting setups for realistic rendering using URP in Unity.</br>
    - Integrated Ready Player Me avatars for personalized VR character systems, including animation rigging and blend shape control.</br>
    - Designed custom Unity Editor tools for workflow automation, component management, and scene setup efficiency.</br>
    - Built a real-time AR object placement app using Unity, ARCore, and image targets with animated 3D content overlays.</br>
    - Developed dynamic face filters for an AR app leveraging Unity's facial landmark tracking and real-time animation.</br>
    - Strong command of Unity C# scripting, ScriptableObjects, Timeline, Animator Controllers, and asset optimization for both mobile and VR platforms.</br>
    - Hands-on experience with Photon PUN 2 and Fusion 2 for real-time multiplayer functionality.` 
    },    
    { year: '2023', title: 'Junior Software Developer', company: 'Realizer Technology Pvt. Ltd. (8 months)', description: '- 8 months work experience in Realizer team of .Net developers for fast-paced software development firm. </br> - Achieved 100% client satisfaction and on-time completion. </br>- Worked on SQL database design projects, query writing and store procedures.</br>- Used C#, ASP.NET Core, and SQL database and Angular framework.' }
  ];

  education = [
    { year: '2021 - 2023', course: 'Master of Computer Science', institution: 'Savitribai Phule Pune University' },
    { year: '2017 - 2020', course: 'Bachelor of Computer Science', institution: 'Shri Chhatrapati Shivaji Mahavidyalaya, Shrigonda' },
    { year: '2016 - 2017', course: 'HSC - General Science (PCM)', institution: 'State Board of Maharashtra' }
  ];
  skills: { name: string; level: number }[] = [];

  private baseSkills = [
    { name: 'Unity AR/VR', level: 70 },
    { name: 'C#', level: 80 },
    { name: 'Angular', level: 80 },
    { name: 'SQL', level: 90 },
    { name: '.NET Core', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 95 },
    { name: 'JavaScript', level: 75 },
    { name: 'Java', level: 85 }
  ];

  scrollPercent = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setStyle(document.documentElement, '--scrollbar-thumb-width', '10px');
      const badge = this.el.nativeElement.querySelector('.scroll-percentage');
      this.renderer.addClass(badge, 'visible');
    }, 500);

    // Trigger animation on progress bars
    setTimeout(() => {
      this.skills = [...this.baseSkills]; // triggers fill width animations
    }, 100);
  }

  onScroll(event: any) {
    const target = event.target;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    this.scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Path to your file in the assets folder
    link.download = 'SwatiRaykar_Resume.pdf'; // Name for the downloaded file
    link.click();
  }
}
