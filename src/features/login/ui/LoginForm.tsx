'use client'

import { API_ENDPOINTS, LoginResponse } from "@/entities/login";
import { fetcher } from "@/shared/api/fetcher";
import { Button } from "@/shared/ui/button/button";
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
    <div className="relative">
      <p className="">{'로그인 화면을 만들자'}</p>
      <Input type="text" value={email} onChange={handleChangeEmail} />
      <Input type="password" value={password} onChange={handleChangePassword} />
      <Button type="submit" className="w-full" onClick={handleClick}>{'로그인'}</Button>
    </div>
  )
}
