import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    // eslint-disable-next-line no-unused-vars
    const { children, fallback } = this.props;

    if (error) return <fallback error={error} />;
    return children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default ErrorBoundary;
