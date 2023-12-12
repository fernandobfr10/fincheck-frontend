import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { httpClient } from "../../../app/services/httpClient";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório.")
    .email("Informe um e-mail válido."),
  password: z
    .string()
    .nonempty("Senha é obrigatória.")
    .min(8, "Senha deve conter pelo menos 8 dígitos."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await httpClient.post("/auth/signin", data);
  });

  return { handleSubmit, register, errors };
}
