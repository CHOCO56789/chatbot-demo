import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textinput from './Textinput';

export default class FormDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            description: '',
        }
        this.inputName = this.inputName.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.inputDescription = this.inputDescription.bind(this);
    }

    inputName = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    inputEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    }

    inputDescription = (event) => {
        this.setState({
            description: event.target.value,
        });
    }

    submitForm = () => {
        const name = this.state.name;
        const email = this.state.email;
        const description = this.state.description;
        
        const payload = {
            text:'お問い合わせがありました\n' +
            'お名前: ' + name + '\n' +
            'Email: ' + email + '\n' +
            '問い合わせ内容: ' + description
        }

        const url = 'https://hooks.slack.com/services/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'

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => {
            alert('送信しました。追ってご連絡します！');
            this.setState({
                name: '',
                email: '',
                description: '',
            });
            return this.props.handleClose();
        });
    }
  
    render() {
        return(
            <React.Fragment>
            <Dialog
              open={this.props.open}
              onClose={this.props.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                お問い合わせフォーム
              </DialogTitle>
              <DialogContent>
                <Textinput
                    label={"名前(必須)"} multiline={false} rows={1}
                    type="text" value={this.state.name} onChange={this.inputName}
                />
                <Textinput
                    label={"メールアドレス(必須)"} multiline={false} rows={1}
                    type="email" value={this.state.email} onChange={this.inputEmail}
                />      
                <Textinput
                    label={"お問い合わせ内容(必須)"} multiline={true} rows={4}
                    type="text" value={this.state.description} onChange={this.inputDescription}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.handleClose}>キャンセル</Button>
                <Button onClick={this.submitForm} autoFocus>
                  送信する
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        )
    }
}