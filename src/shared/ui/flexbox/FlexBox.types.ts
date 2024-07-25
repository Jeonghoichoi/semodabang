export type FlexBoxType = {
  className?: string;

  // flex direction -> row | column, default row
  direction?: string;

  // align 정렬 -> start | end | center | baseline | stretch, default stretch
  align?: string;

  // justify 정렬 -> start | end | center | between | around | evenly, default start!
  justify?: string;

  // true: wrap | false: noWrap
  wrap?: boolean;

  // flex item gap -> 1 | 2 | 3 | 4 ... 8   1 = 4px;
  gap?: string;

  // tailwind  margin code
  margin?: string;

  // tailwind  padding code
  padding?: string;

  /* flex그룹내에 자식 요소의 타입  */
  children?: React.ReactNode;
};
