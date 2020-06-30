import React from 'react';
import { render } from '@testing-library/react';
import Main from './';
import { shallow } from 'enzyme';
import TypingWords from './typing-words';


describe('contains proper text', () => {
  const { getByText } = render(<Main />);

  it('main page includes "jiyoung" text', () => {
    const textElement = getByText(/jiyoung/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe('renders main page normally', () => {
  const wrapper = shallow(<Main />);

  it('main page includes TypingWords component', () => {
    expect(wrapper.contains(<TypingWords words={['Frontend Developer', 'working in SK planet.']} />)).toBeTruthy();
  });
});
