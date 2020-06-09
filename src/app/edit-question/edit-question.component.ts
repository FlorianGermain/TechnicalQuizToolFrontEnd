import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/services/question.service';
import { Question } from '../models/question';

@Component({
  selector: 'tqt-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  questions : any=[];
  question : Question = new Question(4,"Angular","easy","Ceci est la 4eme question",["ah?","non","peut-etre","la réponse D"]);

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.get();
    this.SelectQuestion();
  }

  SelectQuestion(){
    this.question = this.questions[2];
  }


  onSaveQuestion(obj){
    console.log("objet question :");
    console.log(this.question);
   
   

  }

}
