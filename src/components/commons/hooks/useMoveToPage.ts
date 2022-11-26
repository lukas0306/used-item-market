import { useRouter } from "next/router";
export function useMoveToPage() {
  const router = useRouter();

  const moveToPage = (page) => () => {
    router.push(page);
  };
  return {
    moveToPage, //키 밸류 같아서 생략
  };
}
