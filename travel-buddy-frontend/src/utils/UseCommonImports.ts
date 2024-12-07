import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function UseCommonImports() {
  const router = useRouter();

  return {
    Router: router,
    Toast: toast,
  };
}
