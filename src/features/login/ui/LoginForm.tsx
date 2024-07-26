'use client'

import { API_ENDPOINTS, LoginResponse } from "@/entities/login";
import { fetcher } from "@/shared/api/fetcher";
import { Button } from "@/shared/ui/button/button";
import { FlexBox } from "@/shared/ui/flexbox/flexBox";
import { Input } from "@/shared/ui/input/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { replace } = useRouter();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleClick = async () => {
    // login api 연결
    const { data } = await fetcher<LoginResponse>(API_ENDPOINTS.LOGIN.EMAIL);

    if (data?.id && data?.email && data?.nickname) {
      replace('/')
    }
  }

  return (
    <FlexBox
      className="h-screen max-w-[640px] bg-white"
      padding="p-12"
      direction="column">
      <p className="my-4">{'이메일과 비밀번호를 입력하십시오'}</p>
      <Input type="text" className="my-1" value={email} placeholder="이메일을 입력하세요" onChange={handleChangeEmail} />
      <Input type="password" className="my-1" value={password} placeholder="비밀번호를 입력하세요" onChange={handleChangePassword} />
      <p className="py-4">{''}</p>
      <Button type="submit" className="w-full my-4 py-6" onClick={handleClick}>{'로그인'}</Button>
    </FlexBox>
  )
}
