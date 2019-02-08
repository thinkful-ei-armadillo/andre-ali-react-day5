import React, { Component } from 'react';

class Option extends Component {
  render() {
    return <li key={index} className="feature__item">
        <div className={featureClass}
          
          onClick={e => this.updateFeature(key, item)}>
            { item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(item.cost) })
        </div>
      </li>;
  }
}

export default Option;