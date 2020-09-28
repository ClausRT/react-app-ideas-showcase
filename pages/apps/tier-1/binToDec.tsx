import React, { Component } from 'react'
import LineBreak from 'components/line/Line'
import styles from './binToDec.module.css'

class binToDec extends Component {
  constructor(props) {
    super(props)
    this.converter = this.converter.bind(this)
    this.isBinary = this.isBinary.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      inputNumber: '',
      outputNumber: ''
    }
  }

  converter(number: number): number {
    return number
  }

  isBinary(input: number): boolean {
    const isNotZeroOrOne = '[^01]'
    return input.toString().search(isNotZeroOrOne) === -1
  }

  changeHandler(event: Event): void {
    const value = event.target.value

    if (value === '') {
      this.setState({ inputNumber: '', outputNumber: '' })
    } else {
      const response = this.isBinary(value)
        ? this.converter(value)
        : 'Invalid Input'

      this.setState({ inputNumber: value, outputNumber: response })
    }
  }

  render(): JSX.Element {
    return (
      <div className={styles.container}>
        <input
          placeholder="From binary"
          value={this.state.inputNumber}
          onChange={this.changeHandler}
          autoFocus
        />
        <br />
        <LineBreak>TO</LineBreak>
        <br />
        <input placeholder="Decimal" value={this.state.outputNumber} />
      </div>
    )
  }
}

export default binToDec

export const META = {
  title: 'Bin2Dec',
  from:
    'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md',
  tier: '1'
}
