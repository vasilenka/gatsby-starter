import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';

export const sizes = [
  'display1',
  'display2',
  'display3',

  'small',
  'medium',
  'large',

  'message',
  'labelSmall',
  'labelMedium',

  'caption',
  'captionBold',

  'heading1',
  'heading1Alt',
  'heading2',
  'heading3',
  'heading3Alt',
  'heading4',
  'heading4Alt',
  'heading5',
  'heading5Alt',
  'heading6',
  'heading6Alt'
];

const getBooleanSizePropTypes = () => {
  const booleanProps = {};

  forEach(sizes, size => {
    booleanProps[size] = PropTypes.bool;
  });

  return booleanProps;
};

export const SizePropTypes = {
  size: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.size && !includes(sizes, props.size)) {
      return new Error(
        `Invalid prop size='${props.size}' supplied to ${componentName}`
      );
    }

    if (props.size && some(sizes, size => has(props, size))) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with size='${
          props.size
        }' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`
      );
    }
  },
  ...getBooleanSizePropTypes()
};

const parseBooleanSize = props => {
  const sizeProps = {};

  forEach(sizes, size => {
    if (props[size]) {
      sizeProps.size = size;
    }
  });

  return sizeProps;
};

const withTextProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const sizeProp = parseBooleanSize(props);

    const newProps = {
      ...omit(props, sizes),
      ...sizeProp
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = SizePropTypes;

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withTextProps;
