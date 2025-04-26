import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/APIServices/auth.service';
import { UserService } from 'src/app/APIServices/user.service';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.css']
})
export class SaleProductsComponent {
  selectedBlog: any = null;
  blogs = [
    {
      image: '../../assets/Images/Geo-AnchoredAR.png',
      category: 'Augmented Reality',
      title: 'Geo-Anchored AR',
      date: 'August 15, 2024',
      description: `Augmented Reality that Stays in Place </br></br>
      Augmented Reality has come a long way from simple face filters to immersive, real-world experiences.
     One of the most exciting advancements in recent years is Geo-Anchored AR also known as location-based AR.`,
    content: `
     </br><b>What Is Geo-Anchored AR?</b></br>
     Geo-Anchored AR lets developers pin virtual content to real-world GPS locations. Think of it like placing a digital object in the physical world—and having it stay there. 
     Anyone visiting that location can see the same AR experience through their device.</br>
     </br><b>How It Works:</b></br>
     GPS & Compass: For general positioning</br>
     Visual Positioning System (VPS): For centimeter-level accuracy</br>
     SDKs like ARCore Geospatial, Niantic Lightship, and 8thWall make this tech accessible to developers</br>
     </br><b>Use Cases:</b></br>
     Real Estate: Visualize buildings on undeveloped plots</br>
     Gaming: Create persistent outdoor quests or scavenger hunts</br>
     Retail: Drop location-based offers to increase foot traffic</br>
     Tourism: Show historical reconstructions at landmark sites</br>

      </br><b>Why It Matters</b></br>
      Geo-anchored AR moves AR from anywhere to somewhere—making experiences context-aware, repeatable, and persistent. It opens doors for storytelling, brand engagement, smart city innovation, and more.
</br></br>As we move into the era of spatial computing, Geo-Anchored AR is becoming the backbone for creating location-aware immersive content.
</br><b>Have a project idea or use case?</b> </br>Let’s build the future right where it stands.
     `
    }
   
  ];

  openBlog(blog: any) {
    this.selectedBlog = blog;
  }

  closeBlog() {
    this.selectedBlog = null;
  }
  
}
