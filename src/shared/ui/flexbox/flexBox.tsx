import React from 'react';
import { FlexBoxType } from './FlexBox.types';
import './index.scss';

const FlexBox: React.FC<FlexBoxType> = ({ className, direction, align, justify, wrap, gap, margin, padding, children }) => {
  const alignItems = (align: string) => {
    switch (align) {
      case 'start':
        return 'items-start';
      case 'end':
        return 'items-end';
      case 'center':
        return 'items-center';
      case 'baseline':
        return 'items-baseline';
      default:
        return 'items-stretch';
    }
  };

  const justifyContents = (justify: string) => {
    switch (justify) {
      case 'start':
        return 'justify-start';
      case 'end':
        return 'justify-end';
      case 'center':
        return 'justify-center';
      case 'between':
        return 'justify-between';
      case 'around':
        return 'justify-around';
      case 'evenly':
        return 'justify-evenly';
      default:
        return 'justify-start';
    }
  };

  const flexDirection = (direction: string) => {
    switch (direction) {
      case 'vertical':
        return 'flex-col';
      case 'vertical-reverse':
        return 'flex-col-reverse';
      case 'horizontal':
        return 'flex-row';
      case 'horizontal-reverse':
        return 'flex-row-reverse';
      default:
        return 'flex-row';
    }
  };

  return (
    <div
      className={`${className || ''}
        semo-flexbox
        flex
        grow
        ${wrap ? 'flex-wrap' : 'flex-nowrap'}
        ${justifyContents(justify || 'start')}
        ${alignItems(align || 'stretch')}
        ${flexDirection(direction || 'horizontal')}
        ${padding || 'p-0'}
        ${margin || 'm-0'}
        ${direction === 'vertical' ? `gap-y-${gap || '1'}` : `gap-x-${gap || '1'}`}
      `}
    >
      {children}
    </div>
  );
};

FlexBox.displayName = 'FlexBox';

export { FlexBox };
