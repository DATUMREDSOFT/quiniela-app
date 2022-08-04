import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiniela-app';
  usuario!: any;
  cargando = true;

  constructor(private auth: AngularFireAuth) {
    this.auth.user.subscribe((user) => {
      this.usuario = user;
      this.cargando = false;
    })
  }
  login() {
    this.auth.signInWithEmailAndPassword('luisespinoza.le108@gmail.com', 'password').then(success => {
      alert('Exito');
    }).catch(error => {
      alert('Credenciales invalidas');
    });
  }
  logout() {
    this.auth.signOut();
  }
}
