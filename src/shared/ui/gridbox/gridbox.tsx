import React from 'react';
import { useEffect } from 'react';
import { GridBoxType } from './GridBox.types';
import './index.scss';

const GridBox = React.forwardRef<HTMLDivElement, GridBoxType>(({ className, gridRowsRepeat, gridColumnsRepeat, gridAutoFlow, rowGap, columnGap, gap, children, ...props }, ref) => {
  useEffect(() => {}, [gridRowsRepeat, gridColumnsRepeat, gridAutoFlow, rowGap, columnGap, gap, children]);

  return (
    <div
      className={`
        ${className || ''}
        semo-gridbox
        ${gridAutoFlow === 'col' ? `grid-flow-col` : `grid-flow-row`}
      `}
      style={{
        gridTemplateRows: gridRowsRepeat ? `repeat(${gridRowsRepeat}, minmax(0, 1fr))` : 'repeat(2, minmax(0, 1fr))',
        gridTemplateColumns: gridColumnsRepeat ? `repeat(${gridColumnsRepeat}, minmax(0, 1fr))` : 'repeat(2, minmax(0, 1fr))',
        rowGap: rowGap ? String(Number(rowGap) / 4) + 'rem' : '0',
        columnGap: columnGap ? String(Number(columnGap) / 4) + 'rem' : '0',
        gap: gap ? String(Number(gap) / 4) + 'rem' : '0.25rem',
      }}
      {...props}
    >
      {children}
    </div>
  );
});

GridBox.displayName = 'GridBox';

export { GridBox };
