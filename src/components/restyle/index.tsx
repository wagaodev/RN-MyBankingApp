import React from 'react';

import { createBox, createText } from '@shopify/restyle';

import { Theme } from '../../theme';

type Box = React.ComponentProps<typeof Box>;

const Box = createBox<Theme>();
export const Text = createText<Theme>();

export const createBoxWithAttrs = defaultProps =>
  function ({ props }: Box) {
    return <Box {...defaultProps} {...props} />;
  };
