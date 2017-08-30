/* @flow */

import PropTypes from 'prop-types'
import React from 'react'

const selfClosing = <div />
const multiLine = (
    <div>
        <span>Hello World</span>
        <div>
            {selfClosing}
        </div>
    </div>
)

const onChange = () => 1

const singleProp = <input onChange={onChange} />
const multiProp = (
    <div>
        <input onBlur={onChange} onChange={onChange} />
        {multiLine}
    </div>
)
const multiPropSelfClosing = <input onBlur={onChange} onChange={onChange} />

const a = ( // eslint-disable-line no-unused-vars
    <div>
        {singleProp}
        {multiProp}
        {multiPropSelfClosing}
    </div>
)

const Hello = () => <span>Hello</span> // eslint-disable-line no-unused-vars

const Hello2 = () => <span>Hello 2</span> // eslint-disable-line no-unused-vars

const Hello3 = (props: Object) => <input onChange={props.onChange} />

Hello3.propTypes = {onChange: PropTypes.func}

const doSomething = () => null

// allow lifecycle method without this
// eslint-disable-next-line no-unused-vars
class Hi extends React.Component {
    getDefaultProps = () => {
        doSomething()
    }
    getInitialState = () => {
        doSomething()
    }
    getChildContext = () => {
        doSomething()
    }
    componentWillMount = () => {
        doSomething()
    }
    componentDidMount = () => {
        doSomething()
    }
    componentWillReceiveProps = () => {
        doSomething()
    }
    shouldComponentUpdate = () => {
        doSomething()
    }
    componentWillUpdate = () => {
        doSomething()
    }
    componentDidUpdate = () => {
        doSomething()
    }
    componentWillUnmount = () => {
        doSomething()
    }

    render() {
        return '<div></div>'
    }
}
