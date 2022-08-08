import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add two numbers together', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtract a number from another', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const buttonSubtract = container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const buttonMultiply = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMultiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should be able to divide two numbers', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonDivide = container.getByTestId('operator-divide');
    fireEvent.click(buttonDivide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able concatenate number clicks', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('217');
  })

  it('should be able to chain multiple operations', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonSubtract = container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const buttonMultiply = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMultiply);
    // const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonDivide = container.getByTestId('operator-divide');
    fireEvent.click(buttonDivide);
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);


    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('-1');
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    
    fireEvent.click(buttonAdd);
    const buttonClear = container.getByTestId('clear');
    fireEvent.click(buttonClear);

    // hti equals to return calculatedTotal state to runningTotal
    fireEvent.click(buttonEquals);
    
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');

  })


})

