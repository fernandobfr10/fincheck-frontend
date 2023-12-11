import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log("Chama a API com: ", data);
  });

  return { handleSubmit, register, errors };
}
