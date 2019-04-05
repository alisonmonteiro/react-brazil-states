import React from 'react';
import PropTypes from 'prop-types'
import statesItems from './states.json';

class SelectBrazilStates extends React.Component {
  handleChange(event) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  render() {
    const { id, className } = this.props;
    return (
      <div>
        <select id={id} className={className} onChange={this.handleChange}>
          {statesItems.map(item => (
            <option key={item.abbreviation} value={item.abbreviation}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

SelectBrazilStates.propTypes = propTypes;

export default SelectBrazilStates;
export const states = statesItems;