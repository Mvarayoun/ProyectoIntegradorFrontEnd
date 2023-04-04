import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent {
  isLogged = false;


  constructor(private router: Router, private tokenService: TokenService){}
      
      ngOnInit(){
        if (this.tokenService.getToken()){
            this.isLogged = true;
        }else{
          this.isLogged = false;
        }
      }

      onLogout(): void{
        this.tokenService.logOut();
        window.location.reload();
      }

      login(){
        this.router.navigate(['/login']); 
      }
}
