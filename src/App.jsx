import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats, FormDialog } from './components';//'./components/index';の省略

export default class App extends React.Component{
  //初期化
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    //コールバック関数はここでバインドすることで、再度生成されずにパフォーマンスがあがる
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //次の質問を受け取り情報を更新する
  displayNextQuestion = (nextQuestionId) => {
    // 新しい配列を作成して更新
    const newChats = [...this.state.chats, {
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    }]

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: newChats,
      currentId: nextQuestionId
    })
  }

  //選択肢を選択した時の処理
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) { 
      // initの場合は単純にreturnする
      case (nextQuestionId === 'init'):
        return this.displayNextQuestion(nextQuestionId);

      case (nextQuestionId === 'contact'):
        this.handleClickOpen();
        break;

      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        return;
      default:
        // 新しい配列を作成して更新
        const newChats = [...this.state.chats, {
          text: selectedAnswer,
          type: 'answer'
        }]
    
        this.setState({
            chats: newChats
        })

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
    }
  }
  
  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  componentDidMount() {
    // 初期メッセージのみを表示
    this.displayNextQuestion(this.state.currentId);
  }
  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area');
    if(scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;      
    }
  }

  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
        </div>
        <FormDialog 
          open={this.state.open} 
          handleClose={this.handleClose}
          handleClickOpen={this.handleClickOpen}
        />
      </section>
    );
  }
}

