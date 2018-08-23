import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import { HamburgerButton } from 'components';

import styles from './styles.scss';

console.log('Got styles link', styles.link);

class Navbar extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })),
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    items: [],
  };

  state = {
    toggled: false,
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props;
    if (pathname !== prevProps.location.pathname) {
      this.setState({ toggled: false });
    }
  }

  toggleMenu = toggled => this.setState({ toggled })

  render() {
    const { items, title } = this.props;
    const { toggled } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          { title &&
            <NavLink to="/" className={styles.title}>
              { title }
            </NavLink>
          }

          <ul className={[styles.list, toggled && styles.toggledList].join(' ')}>
            { items.map(item => (
              <li key={item.id} className={styles.listItem}>
                <NavLink
                  to={item.to}
                  className={styles.link}
                  activeClassName={styles.activeLink}
                  exact={item.to === '/'}
                >
                  { item.title }
                </NavLink>
              </li>
            )) }
          </ul>

          <HamburgerButton
            opened={toggled}
            onClick={() => this.toggleMenu(!toggled)}
            className={styles.menuBtn}
          />
        </div>
      </div>
    );
  }
}


export default withRouter(Navbar);
