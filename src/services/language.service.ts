import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }


  get(): Array<string> {
   
    
    return ["Angular","Csharp","SQL","HTML","CSS"];

  }


}
