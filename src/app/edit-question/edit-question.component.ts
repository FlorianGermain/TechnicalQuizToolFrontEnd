import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/services/question.service';
import { Question } from '../models/question';
import { LanguageService } from 'src/services/language.service';
import { DifficultyService } from 'src/services/difficulty.service';

@Component({
  selector: 'tqt-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  questions : any=[];
  question : Question = new Question(4,"Angular","easy","Ceci est la 4eme question",["ah?","non","peut-etre","la réponse D"]);
  languageList : any =  [];
  difficultyList : Array<string> = [];

  constructor(private questionService:QuestionService,
              private languageService:LanguageService,
              private difficultyService:DifficultyService
             ) { }

  ngOnInit(): void {
    this.questions = this.questionService.get();
    this.languageList=this.languageService.get();
    this.difficultyList=this.difficultyService.get();

    this.SelectQuestion();
  }

  SelectQuestion(){
    this.question = this.questions[1];
  }


  onSaveQuestion(obj){
    console.log("objet question :");
    console.log(this.question);
   
   

  }

}
