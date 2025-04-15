"use client";

import { useEffect } from "react";

//에러 발생시, 넥스트js는 Error컴포넌트에게 error객체를 props로 전달해줌
export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h3>오류가 발생했습니다</h3>
    </div>
  );
}
