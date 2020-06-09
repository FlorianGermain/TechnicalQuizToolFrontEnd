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
      //new Question(1,"Angular","easy","Ceci est la premiere question",[["vrai"],["non"],["je ne sais pas"],["la réponse D"]]),
      new Question(2,"CSharp","hard","Ceci est la 2eme question",["vrai","non","surement","la réponse D"]),
      new Question(3,"SQL","medium","Ceci est la 3eme question",["ah bon?","non","peut-etre","la réponse D"]),
      new Question(4,"Angular","easy","Ceci est la 4eme question",["ah?","non","peut-etre","la réponse D"])
    ];

  }


}
