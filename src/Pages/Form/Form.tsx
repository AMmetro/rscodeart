import React, { createRef } from 'react';
import { Component } from 'react';
import FormOutput from './FormOutput';

export type DataItemType = {
  InputTxt: string;
  InputDate: string;
  InputCheckBox: boolean;
  InputRadio: boolean;
  photoContent: string;
  InputDoc: string;
  InputSelect: string | undefined;
};

interface State {
  InputTxt: string;
  InputDate: string;
  InputCheckBox: boolean;
  InputRadio: boolean;
  InputDoc: string;
  photoContent: string;
  InputSelect: string;
  formIsSubmited: boolean;
  InputTxtError: boolean;
  InputSelectError: boolean;
  data: DataItemType[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      InputTxt: '',
      InputDate: '',
      InputCheckBox: false,
      InputRadio: false,
      InputDoc: '',
      photoContent: '',
      InputSelect: '',
      formIsSubmited: false,
      InputTxtError: false,
      InputSelectError: false,
      data: [],
    };

    this.handleChangeTxt = this.handleChangeTxt.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleTxtChange = this.handleTxtChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectInput = createRef<HTMLSelectElement>();

  handleChangeTxt(event: React.SyntheticEvent): void {
    const target = event.target as HTMLInputElement;
    this.setState({ ...this.state, InputTxt: target.value });
  }
  handleChangeDate(event: React.SyntheticEvent): void {
    const target = event.target as HTMLInputElement;
    this.setState({ ...this.state, InputDate: target.value });
  }

  handleChangeCheckBox(event: React.ChangeEvent<HTMLInputElement>): void {
    const { checked } = event.target as unknown as { checked: boolean };
    this.setState({ ...this.state, InputCheckBox: checked });
  }
  handleChangeRadio(): void {
    this.setState({ ...this.state, InputRadio: !this.state.InputRadio });
  }

  handleTxtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        this.setState({ ...this.state, InputDoc: reader.result });
      }
    };
    reader.readAsText(fileList[0]);
  };

  handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    if (event.target.files && event.target.files[0]) {
      this.setState({ ...this.state, photoContent: URL.createObjectURL(event.target.files[0]) });
    }
  };

  handleSubmit(event: React.SyntheticEvent): void {
    const newItem: DataItemType = {
      InputTxt: this.state.InputTxt,
      InputDate: this.state.InputDate,
      InputCheckBox: this.state.InputCheckBox,
      InputRadio: this.state.InputRadio,
      photoContent: this.state.photoContent,
      InputDoc: this.state.InputDoc,
      InputSelect: this.selectInput.current?.value,
    };

    const clearedState: Omit<State, 'data'> = {
      InputTxt: '',
      InputDate: '',
      InputCheckBox: false,
      InputRadio: false,
      photoContent: '',
      InputDoc: '',
      formIsSubmited: false,
      InputTxtError: false,
      InputSelect: '',
      InputSelectError: false,
    };

    this.setState((state) => ({ ...state, formIsSubmited: true }));

    if (this.selectInput.current?.value === 'Choose here') {
      this.setState((state) => ({ ...state, InputSelectError: true }));
    } else {
      this.setState((state) => ({ ...state, InputSelectError: false }));
    }

    if (this.state.InputTxt === '') {
      this.setState((state) => ({ ...state, InputTxtError: true }));
    } else {
      this.setState((state) => ({ ...state, InputTxtError: false }));
    }

    if (this.state.InputCheckBox && !this.state.InputTxtError && !this.state.InputSelectError) {
      this.setState({ ...this.state, ...clearedState, data: [...this.state.data, newItem] });
    }

    event.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#a7c3ec',
          borderRadius: '10px',
          margin: '40px auto',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <div>
            <b>Add user data in the form details</b>
          </div>
          <label>
            Enter name: (required)
            <input
              style={{ border: `${this.state.InputTxtError ? '2px solid red' : ''}` }}
              type="text"
              value={this.state.InputTxt}
              onChange={this.handleChangeTxt}
              placeholder="your Name"
            />
          </label>
          <br />
          <label>
            Select gender: (required)
            <select
              ref={this.selectInput}
              style={{ border: `${this.state.InputSelectError ? '2px solid red' : ''}` }}
            >
              <option value="Choose here">Choose here</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label>
            <br />
            Enter date of birth:
            <input type="date" value={this.state.InputDate} onChange={this.handleChangeDate} />
          </label>
          <label>
            <br />
          </label>
          <label>
            <br />
            <span>Subscribe to the newsletter: </span>
            <span>Yes</span>
            <input
              type="radio"
              value={'yes'}
              checked={this.state.InputRadio}
              onChange={this.handleChangeRadio}
            />
            <span>No</span>
            <input
              type="radio"
              value={'no'}
              checked={!this.state.InputRadio}
              onChange={this.handleChangeRadio}
            />
          </label>
          <br />
          <br />
          <div>
            <label>
              Upload description:
              <input type="file" onChange={this.handleTxtChange} accept={'.txt'} />
            </label>
            <pre>{this.state.InputDoc}</pre>
          </div>
          <div>
            <label>
              Upload photo:
              <input type="file" onChange={this.handlePhotoChange} accept={'.jpg, .jpeg'} />
            </label>
          </div>
          {this.state.photoContent && (
            <img src={this.state.photoContent} alt="profilePhoto" style={{ width: '100px' }} />
          )}
          <br />
          {!this.state.InputCheckBox && this.state.formIsSubmited && (
            <div style={{ color: 'red' }}>Error</div>
          )}
          <span>Everything is correct:</span>
          <input
            type="checkBox"
            checked={this.state.InputCheckBox}
            value={'checkBox'}
            onChange={this.handleChangeCheckBox}
          />
          <br />
          <br />
          {/* <input type="submit" value="Submit" /> */}
          <button type="submit" value="Submit">
            Submit
          </button>
          <br />
          <br />
        </form>
        <FormOutput data={this.state.data} />
      </div>
    );
  }
}

export default Form;
