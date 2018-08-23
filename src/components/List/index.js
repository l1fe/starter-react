import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

class List extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    loading: false,
    items: [],
  }

  componentDidMount() {
    const { fetchItems } = this.props;

    fetchItems();
  }

  render() {
    const { loading, items } = this.props;

    return (
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
        { loading &&
          <div className={styles.loading}>
            Loading...
          </div>
        }
      </div>
    );
  }
}

export default List;
