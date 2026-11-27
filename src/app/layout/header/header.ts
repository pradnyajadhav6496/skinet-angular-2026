import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatIcon, MatBadge, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
