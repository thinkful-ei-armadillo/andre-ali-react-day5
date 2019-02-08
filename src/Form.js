import React, { Component } from 'react';
import Option from './Option';

class Form extends Component {
render() {

const features = Object.keys(this.props.features)
.map(key => {
  const options = this.props.features[key].map((item, index) => {
    console.log(key);
    return <Option item={item} index={index} selected={this.props.selected} featureKey={key} updateFeature={this.props.updateFeature} />
  });

  return <div className="feature" key={key}>
    <div className="feature__name">{key}</div>
    <ul className="feature__list">
      { options }
    </ul>
  </div>
}); 

    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
        </section>
    );
    }
}
export default Form;