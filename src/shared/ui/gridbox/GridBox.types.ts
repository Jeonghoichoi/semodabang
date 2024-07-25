export type GridBoxType = {
  className?: string;

  // 그리드 row 반복 개수
  gridRowsRepeat?: string;

  // 그리드 columns 반복 개수
  gridColumnsRepeat?: string;

  // 자동 생성되는 그리드 아이템의 배치 방향
  gridAutoFlow?: string;

  // 그리드 내 rowgap ex: rowGap: 12px
  rowGap?: string;

  // 그리드 내 columnGap ex: columnGap: 12px
  columnGap?: string;

  // 우선순위는 gap이 제일 높다. rowgap && columnGap 둘다 포함!
  gap?: string;

  /* grid 그룹내에 자식 요소의 타입  */
  children?: React.ReactNode;
};
