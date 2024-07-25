import { MainContents } from '../MainContents';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { fetcher } from '@/shared/api/fetcher';

jest.mock('@/shared/api/fetcher');

beforeEach(() => {
  // 설정: fetcher 함수가 항상 테스트 데이터를 반환하도록 설정
  (fetcher as jest.Mock).mockResolvedValue({
    success: true,
    code: 'SUCCESS',
    message: '정상 처리 되었습니다.',
    aid: 'a1234567890',
    data: [
      {
        title: 'Test Title',
        description: 'Test Description',
        imageUrl: '/path/to/image.jpg',
        contentsId: '1',
      },
    ],
  });
});

describe('앱을 렌더링합니다.', () => {
  it('버튼이 있습니다.', async () => {
    const ui = await MainContents();
    render(ui);

    // "상세 보기" 버튼을 찾는다.
    const button = screen.getByRole('button', {
      name: '상세 보기',
    });
    expect(button).toBeInTheDocument();
  });
});
