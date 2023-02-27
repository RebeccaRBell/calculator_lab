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

  it('should add 2 numbers together', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract one number from another', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  
  })

  it('should multiple one number by another', () => {
    const number3 = container.getByTestId('number3');
    const number5 = container.getByTestId('number5');
    const multiply = container.getByTestId('operator-multiply');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number3);
    fireEvent.click(multiply);
    fireEvent.click(number5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })

    it('should divide one number by another', () => {
    const number2 = container.getByTestId('number2');
    const number1 = container.getByTestId('number1');
    const number7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2);
    fireEvent.click(number1);
    fireEvent.click(divide);
    fireEvent.click(number7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const number2 = container.getByTestId('number2');
    const number1 = container.getByTestId('number1');
    const number7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number7);
    fireEvent.click(number1);
    fireEvent.click(number2);
    expect(runningTotal.textContent).toEqual('712');

  })
  it('should chain multiple operations together', () => {
    const divide = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals');
    const multiply = container.getByTestId('operator-multiply');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(divide);
    fireEvent.click(button2);
    fireEvent.click(multiply);
    fireEvent.click(button3);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('6');


  })

  it('should clear the running total without affecting the calculation', () => {
    const equals = container.getByTestId('operator-equals');
    const add = container.getByTestId('operator-add');
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button3);
      fireEvent.click(clear);
    fireEvent.click(add);
    fireEvent.click(button3);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })
})

