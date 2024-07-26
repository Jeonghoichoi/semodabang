import React from 'react';
import { FlexBoxType } from './FlexBox.types';
import './index.scss';

const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxType>(({ className, direction, align, justify, wrap, gap, rowGap, columnGap, margin, padding, children, onClick, ...props }, ref) => {
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
      case 'column':
        return 'flex-col';
      case 'column-reverse':
        return 'flex-col-reverse';
      case 'row':
        return 'flex-row';
      case 'row-reverse':
        return 'flex-row-reverse';
      default:
        return 'flex-row';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className || ''}
          semo-flexbox
          flex
          grow
          ${wrap ? 'flex-wrap' : 'flex-nowrap'}
          ${justifyContents(justify || 'start')}
          ${alignItems(align || 'stretch')}
          ${flexDirection(direction || 'row')}
          ${padding || 'p-0'}
          ${margin || 'm-0'}
        `}
      style={{
        rowGap: rowGap ? String(Number(rowGap) / 4) + 'rem' : '0',
        columnGap: columnGap ? String(Number(columnGap) / 4) + 'rem' : '0',
        gap: gap ? String(Number(gap) / 4) + 'rem' : '0.25rem',
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
});

FlexBox.displayName = 'FlexBox';

export { FlexBox };
