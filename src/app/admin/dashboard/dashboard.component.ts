import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  roles = ['a Web Developer', 'an AR Developer', 'a VR Developer'];
  backgrounds = [
    'url("../../../assets/Images/Bg3.jpg")',
    'url("../../../assets/Images/Augmented_Reality_Work.jpg")',
    'url("../../../assets/Images/Cases_Studies_in_Real_Estate1.jpeg")'
  ];

  displayText = '';
  currentRoleIndex = 0;
  isDeleting = false;
  typingSpeed = 30;
  currentBackground = this.backgrounds[0];
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {
    this.typeWriter();
    this.setBackground(this.currentRoleIndex);
  }

  typeWriter() {
    const current = this.roles[this.currentRoleIndex];
    const fullText = current;

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    }

    let speed = this.typingSpeed;

    if (!this.isDeleting && this.displayText === fullText) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;

      //Change background when new role starts typing
      this.setBackground(this.currentRoleIndex);

      speed = 500;
    }

    setTimeout(() => this.typeWriter(), speed);
  }

  setBackground(index: number) {
    const background = this.backgrounds[index];
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.main'),
      'backgroundImage',
      background
    );
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'backgroundSize',
      'cover'
    );
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'backgroundPosition',
      'center'
    );
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'transition',
      'background-image 1s ease-in-out'
    );
  }
}
