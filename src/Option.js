import React, { Component } from 'react';

class Option extends Component {
  render() {
    const key = this.props.featureKey;
    const item = this.props.item;

    const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;

    return <li key={this.props.index} className="feature__item">
        <div className={featureClass}
          
          onClick={e => this.props.updateFeature(key, item)}>
            { item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(item.cost) })
        </div>
      </li>;
  }
}

export default Option;