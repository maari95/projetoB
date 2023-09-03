import { Component } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent {
  imageUrl: string | ArrayBuffer | null = null;

  previewImage(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result || null;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      this.imageUrl = null;
    }
  }
}
