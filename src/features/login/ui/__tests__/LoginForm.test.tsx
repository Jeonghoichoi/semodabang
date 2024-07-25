import { LoginForm } from '../LoginForm';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { fetcher } from '@/shared/api/fetcher';

jest.mock('@/shared/api/fetcher');

// invariant expected app router to be mounted 에러 처리를 위해 추가
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

beforeEach(() => {
  // 설정: fetcher 함수가 항상 테스트 데이터를 반환하도록 설정
  (fetcher as jest.Mock).mockResolvedValue({
    success: true,
    code: 'SUCCESS',
    message: '정상 처리 되었습니다.',
    aid: 'a1234567890',
    data: {
      id: 'super_admin',
      email: 'super.admin@kyobo.com',
      nickname: 'susususuper',
    },
  });
});

describe('앱을 렌더링합니다.', () => {
  test('로그인 버튼 테스트', () => {
    render(<LoginForm />);

    const button = screen.getByRole('button', {
      name: '로그인',
    });
    expect(button).toBeInTheDocument();
  });
});
