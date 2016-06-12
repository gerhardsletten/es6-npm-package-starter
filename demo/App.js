import React, {Component} from 'react'
import MyComponent from '../src/Hello'
import {sentenceCase} from 'change-case'
import npmPackage from '../package.json'
import './style.css'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      compProps: {...MyComponent.defaultProps}
    }
  }

  handleChange (key, event) {
    this.setState({
      compProps: {...this.state.compProps, [key]: event.target.value}
    })
  }

  render () {
    return (
      <div>
        <section className='hero is-info'>
          <div className='hero-body'>
            <div className='container'>
              <a href={npmPackage.homepage} className='is-pulled-right is-medium tag is-dark'>Fork on Github</a>
              <h1 className='title'>
                {sentenceCase(npmPackage.name)} ({npmPackage.version})
              </h1>
              <h2 className='subtitle'>
                {npmPackage.description}
              </h2>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <hr />
            {this.renderControls()}
            <hr />
            {this.renderLayoutTitle()}
            {this.renderComponent()}
          </div>
        </section>
        <footer className='footer is-info'>
          <div className='container'>
            <div className='has-text-centered'>
              <p><a className='is-white' href={npmPackage.homepage}>Fork on Github</a> | Designtheme powered by <a className='is-white' href='http://bulma.io/'>bulma.io</a></p>
              <br />
            </div>
          </div>
        </footer>
      </div>
    )
  }

  renderLayoutTitle () {
    return (
      <nav className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <h3 className='title is-white is-5'><strong>Preview</strong></h3>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            A label
          </div>
          <div className='level-item'>
            <a className='tag is-medium is-dark'>Action #1</a>
          </div>
          <div className='level-item'>
            <a className='tag is-medium is-success'>Action #2</a>
          </div>
        </div>
      </nav>
    )
  }

  renderControls () {
    const {compProps} = this.state
    return (
      <div>
        <h3 className='title is-white is-5'><strong>Component props</strong></h3>
        <div className='box is-black'>
          <div className='columns'>
            <div className='column'>
              <div className='is-horizontal control'>
                <div className='control-label'>
                  <label className='label'>name</label>
                </div>
                <div className='control'>
                  <input className='input' type='text' value={compProps.name} onChange={this.handleChange.bind(this, 'name')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderComponent () {
    return (
      <MyComponent {...this.state.compProps} />
    )
  }
}
