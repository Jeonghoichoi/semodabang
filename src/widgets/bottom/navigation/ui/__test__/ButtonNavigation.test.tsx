import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BottomNavigation } from '../BottomNavigation';
import { describe } from 'node:test';

describe('BottomNavigation', () => {
  test('5개의 icon이 존재한다', () => {
    render(<BottomNavigation />);

    const expectedIcons = ['홈', '세모클래스', '세모책', '세모노트', '마이'];
    expectedIcons.forEach(icon => {
      expect(screen.getByText(icon)).toBeInTheDocument();
    });
  });
});
