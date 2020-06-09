import { Injectable } from '@angular/core';
import { Question } from '../app/models/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  get(): Array<Question> {
   

    return [
      // new Question(1,"Angular","easy","Ceci est la premiere question","vrai","non","je ne sais pas","la réponse D"),
      // new Question(2,"Angular","easy","Ceci est la 2eme question","vrai","non","surement","la réponse D")
       
      new Question(1,"Angular","easy","Ceci est la premiere question",["vrai","non","je ne sais pas","la réponse D"]),
      new Question(2,"Angular","easy","Ceci est la 2eme question",["vrai","non","surement","la réponse D"])
     
    ];

  }


}
