import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTooltipModule, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portifolio-lucas';

  WhatsApp() {
    var x = "5531975580097";
    var mensagem = "Hi Lucas Souza, I saw your portfolio and I saw that you are into FullStack Development technologies,lets get in touch!";
    var link = "https://api.whatsapp.com/send?phone=" + x + "&text=" + encodeURIComponent(mensagem);
    window.open(link);
  }

  Email() {
    const email = "lucasvieirasouzaa@gmail.com";
    const subject = "Hi Lucas Souza, I saw your portfolio and would like to get in touch!";
    const subjectEncoded = encodeURIComponent(subject);  
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subjectEncoded}`;
    window.location.href = gmailUrl;
};

}
