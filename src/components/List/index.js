import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const List = ({ items }) => (
  <div>
    <div className={styles.meta}>
      <div className={styles.total}>
        { items.length } total
      </div>
    </div>
    <div className={styles.list}>
      { items.map(({ id, title, link }) => (
        <div key={id} className={styles.item}>
          <Link to={link} className={styles.link}>
            { title }
          </Link>
        </div>
      )) }
    </div>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
};

List.defaultProps = {
  items: [],
};

export default List;
