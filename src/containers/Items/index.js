import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { List } from 'components';
import { apiActions } from 'redux/actions';

class Items extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    fetchTodos: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })),
  }

  render() {
    const { loading, fetchTodos, items } = this.props;

    return (
      <div>
        <h2>Items</h2>
        <List
          loading={loading}
          fetchItems={() => fetchTodos()}
          items={items}
        />
      </div>
    );
  }
}

// dummy selector
const getAllTodos = (state) => state.entities.todos.allIds.map(id => ({
  ...state.entities.todos.byId[id],
  link: `/items/${id}`,
}));

const mapStateToProps = (state) => ({
  loading: state.api.todos.loading,
  items: getAllTodos(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(apiActions.todos.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
