import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ match: { params: { id } } }) => (
  <div>
    <Link to="/items">Go back</Link>
    <h2>Item { id }</h2>
  </div>
);

Item.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
