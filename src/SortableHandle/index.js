import * as React from 'react';

import {provideDisplayName} from '../utils';

export default function sortableHandle(WrappedComponent) {
  return class WithSortableHandle extends React.Component {
    static displayName = provideDisplayName('sortableHandle', WrappedComponent);

    constructor(props) {
      super(props);
      this.innerRef = React.createRef();
    }

    componentDidMount() {
      const node = this.innerRef.current;
      node.sortableHandle = true;
    }

    getWrappedInstance() {
      return this.innerRef.current;
    }

    render() {
      return <WrappedComponent ref={this.innerRef} {...this.props} />;
    }
  };
}

export function isSortableHandle(node) {
  return node.sortableHandle != null;
}
