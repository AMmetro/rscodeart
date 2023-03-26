import React from 'react';
import { Component } from 'react';
import { DataItemType } from './Form';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {}

type PropsType = { data: DataItemType[] };

class FormOutput extends Component<PropsType, State> {
  constructor(props: PropsType) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: '0px solid gray' }}>
        {this.props.data.map((item: DataItemType, i: number) => {
          return (
            <div key={i}>
              <hr style={{ width: '90%' }} />
              <div>User name: {item.InputTxt}</div>
              <div>{item.InputDate && `User birth: ${item.InputDate}`}</div>
              <div>{item.InputSelect && `Сhosen gender: ${item.InputSelect}`}</div>
              <div>News letter subscribe: {item.InputRadio ? ' Yes' : ' No'}</div>
              <div>
                {item.InputDoc && (
                  <div style={{ border: '1px solid gray', margin: '1px 10px 1px 10px' }}>
                    Description: <div>{item.InputDoc}</div>
                  </div>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div>Photos:</div>
                {item.photoContent ? (
                  <div>
                    <img src={item.photoContent} alt="profilePhoto" style={{ width: '100px' }} />
                  </div>
                ) : (
                  ' no Photos'
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FormOutput;
