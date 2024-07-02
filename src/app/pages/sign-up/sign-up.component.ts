import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  nome?: string;
  email?: string;
  senha?: string;
  dataNasc?: Date;
  user?: User;


}
