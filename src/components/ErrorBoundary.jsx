import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorScreen from './ErrorScreen';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? <ErrorScreen error={error} /> : children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ErrorBoundary;
