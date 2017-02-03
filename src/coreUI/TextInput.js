// @flow
import React from 'react';

type Props = {
  isMultiline: boolean;
  // onChange: (event: Object) => void;
  onTextChange: (text: string) => void;
  isAttribute: Object;
};

function TextInput(props: Props) {
  let {isMultiline, isAttribute} = props;
  // let {isMultiline, onTextChange} = props;

  let onChange = (event: {target: {value: string}}) => {
    props.onTextChange(event.target.value);
  };

  // let value;
  // let onChange= (event) => {
  //   value = event.target.value;
  //   onTextChange(value);
  // };

  // onTextChange = () => {
  //   onTextChange(value);
  // };

  if (isMultiline) {
    // delete props.isMultiline;
    return <textarea type="text" onChange={onChange} {...isAttribute} />;
    // return <textarea type="text" value={value} onChange={onChange} {...props}></textarea>;
  } else {
    return <input type="text" onChange={onChange} {...isAttribute} />;
    // return <input type="text" value={value} onChange={onChange} {...props}/>;
  }

}

export default TextInput;
