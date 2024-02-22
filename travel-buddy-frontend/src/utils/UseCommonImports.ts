import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function UseCommonImports() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return {
    QueryClient: queryClient,
    Router: router,
    Toast: toast,
  };
}
