import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }


  get(): Array<string> {
   
    
    return ["Angular","CSharp","SQL","HTML","CSS"];

  }


}
