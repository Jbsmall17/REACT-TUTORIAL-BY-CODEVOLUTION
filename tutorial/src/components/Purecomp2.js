import React, { PureComponent } from 'react'

export class Purecomp2 extends PureComponent {
  render() {
    console.log("***purecomp****")
    return (
      <div>
        PURECOMPONENT(CHILD) {this.props.name}
      </div>
    )
  }
}

export default Purecomp2
