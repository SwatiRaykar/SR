import { Component,Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from 'src/app/APIServices/products.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent {

  selectedCategory = 'All';

  selectedItem: any = null;
  activeImageIndex = 0;

  items = [
    { 
      title: 'Virtual Room', 
      text: 'Virtual room handling gadgets',  
      client: 'ABC',
      website: 'No Website',
      description: `This immersive VR experience features a fully interactive virtual room designed for enhanced user engagement. </br>The environment supports teleportation-based movement, realistic sound effects, 
      and particle effects to enrich visual feedback.</br> Users can interact with and manipulate objects, with integrated haptic feedback for a tactile experience.</br> Real-time communication is enabled through socket integration, and the intuitive VR UI ensures seamless navigation and interaction.

`,
      images: ['../../assets/Images/VRRoom.png'], 
      category: 'Virtual Reality' 
    },
    { 
      title: 'Virtual Classroom', 
      text: '',  
      client: 'ABC',
      website: 'No Website',
      description: `This project focuses on building an immersive virtual classroom experience using VR technology.</br> The environment supports multiplayer interaction with Photon PUN for real-time networking.</br> Users are represented through customizable Ready Player Me avatars, integrated via Meta Movement SDK for realistic motion.</br> A functional and intuitive UI has been implemented to enhance usability and engagement within the virtual space.`,
      images: ['../../assets/Images/VRClassroom.png'], 
      category: 'Virtual Reality' 
    },
  
    { 
      title: 'Rocket Booster',
       text: 'Boost your way through danger zones',
       client: 'ABC',
       website: 'https://sharemygame.com/@Swati_01/rocket-boost',
       description: `Rocket Boost is an immersive VR game that combines dynamic gameplay with intuitive controls. 
       Leveraging my experience in creating VR experiences, I designed a smooth and engaging interface that challenges players to navigate a rocket through three thrilling levels. Players must avoid obstacles and land safely to progress.
        </br></br> <b>Controls are simple:</b></br> use the space bar to boost upward, and arrow keys to tilt the rocket. Crash, and it's game over—land, and you level up!`,
       images: ['../../assets/Images/RocketBooster.png'], 
       category: 'Games' 
      },

      { 
        title: 'Fighter Plane',
         text: 'Fighter Plane Game',
         client: 'ABC',
         website: '',
         description: `This project is an immersive fighter plane game that delivers an engaging aerial combat experience. The game features a custom-designed 3D terrain that adds depth and realism to the environment. Particle effects and animations enhance the visual appeal, simulating explosions, bullet trails, and engine thrust for dynamic gameplay feedback.

A core highlight is the implementation of responsive controls: tilt functionality allows the fighter plane to bank left or right on button press, providing intuitive and realistic navigation. Bullet fire mechanics are seamlessly integrated, enabling players to shoot enemies with smooth, responsive feedback.
</br></br>
<b>Key Features:</b></br>

Custom 3D terrain design for immersive environment.</br>

Particle effects for explosions, bullets, and engine visuals.</br>

Fighter plane animation including tilting on button press.</br>

Bullet firing mechanics with real-time projectile animation.</br>

Optimized for smooth gameplay and interaction.`,
         images: ['../../assets/Images/FighterPlane.png'], 
         category: 'Games' 
        },

    { title: 'Face Filters App',
       text: 'Transform your face with fun and interactive AR filters in real time.', 
       client: 'ABC',
       website: 'https://swatiraykar.com',
       description: `Designed and developed a custom AR face filter application in Unity using ARCore, aimed at strengthening AR development skills and exploring facial tracking capabilities.</br>- Implemented dynamic face filter switching functionality with an interactive, user-friendly UI for real-time customization.
</br>- Integrated features such as face occlusion, material-based face color changes, and multiple filter styles (e.g., masks, makeup, overlays).
</br>- Developed UI controls for filter selection, live preview, and real-time response to facial expressions and gestures.
</br>- Focused on optimizing performance and accuracy in face tracking, ensuring smooth experience across a variety of Android devices.
</br>- Built this project as a self-initiated learning module to deepen understanding of ARCore face mesh API, shader effects, and user experience design.`,
      //  images: ['../../assets/Images/HorrorFilter.jpg'],
        video: 'https://youtube.com/embed/otY5dsDwzRw?si=X5bfSB3AgO_xBK1a',
        category: 'Augmented Reality',
        thumbnail: '../../assets/Images/HorrorFilter.jpg'
       },
    { 
      title: 'What is AR?',
       text: 'Watch the video.',
       client: 'ABC',
       website: 'https://swatiraykar.com',
       description: `Experience the Future with Augmented Reality!
                  In this video, I showcase an interactive AR experience that blends the digital and real world in real time. Watch as 3D elements
                   come to life through your screen, demonstrating the power and potential of Augmented Reality technology. Perfect for tech enthusiasts, developers, and anyone curious about immersive experiences!`,
         video: 'https://www.youtube.com/embed/VxWjj120rbo',
          category: 'Augmented Reality',
          thumbnail: '../../assets/Images/Pokemon.png'
         },   
    { 
      title: 'Bullion Mentor', 
      text: 'Helping you make informed decisions in the bullion market for smarter investments.',
      client: 'ABC',
      website: 'https://www.bullionmentor.com',
      description: `Bullion Mentor is a comprehensive platform that provides real-time spot prices for various forms of precious metals, including coins, bars, and rounds.</br>
       Whether you are a seasoned investor or a new enthusiast, Bullion Mentor helps you make informed buying decisions by aggregating live market data from trusted sources.</br>Users can explore 
       up-to-date pricing for gold, silver, platinum, and palladium products across different weights and formats, compare historical trends, and stay ahead of market fluctuations. </br>The platform ensures transparency and reliability, making it an essential tool for anyone involved in bullion trading or collection.`,
       images: ['../../assets/Images/BullionM.png','../../assets/Images/BullionM1.png'],
         category: 'Web Design & Development',
        }
    
  ];

  get filteredItems() {
    return this.selectedCategory === 'All'
      ? this.items
      : this.items.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  openPopup(item: any) {
    this.selectedItem = item;
    this.activeImageIndex = 0;
  }

  closePopup() {
    this.selectedItem = null;
  }

  prevImage() {
    if (this.selectedItem?.images?.length) {
      this.activeImageIndex =
        (this.activeImageIndex - 1 + this.selectedItem.images.length) % this.selectedItem.images.length;
    }
  }

  nextImage() {
    if (this.selectedItem?.images?.length) {
      this.activeImageIndex =
        (this.activeImageIndex + 1) % this.selectedItem.images.length;
    }
  }
}
