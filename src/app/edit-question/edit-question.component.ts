import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'tqt-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  questions : any=[];

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.get();
  }



}
