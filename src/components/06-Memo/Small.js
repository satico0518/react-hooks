import React from 'react';
import PropTypes from 'prop-types';

const Small = React.memo(({ value }) => {
  console.log('calling SMALL ');
  return <small>{value}</small>;
});

Small.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Small;
