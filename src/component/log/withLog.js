import React, { Component } from 'react';

class WithLog extends Component {
  state = {
    title: 'Logger title',
    message: '',
  };

  buildState = () => {
    let ignore = [],
      keys = Object.keys(this.props);
    if (this.props.title) {
      //eslint-disable-next-line
    console.group(this.props.title);
      ignore.push('title');
    } else {
      //eslint-disable-next-line
      console.group("logGroup");
    }

    keys.map(key => {
      //debugger
      //only if not in ignore list
      if (ignore.indexOf(key) === -1) {
        //eslint-disable-next-line
      console.log(key, "...", this.props[key]);
      }
    });

    //eslint-disable-next-line
    console.groupEnd();
  };
  render() {
    this.buildState();
    return (
      <div className="log-writer">
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default WithLog;
