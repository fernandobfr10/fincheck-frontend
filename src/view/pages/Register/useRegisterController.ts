import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório."),
  email: z
    .string()
    .nonempty("E-mail é obrigatório.")
    .email("Informe um e-mail válido."),
  password: z
    .string()
    .nonempty("Senha é obrigatória.")
    .min(8, "Senha deve conter pelo menos 8 dígitos."),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log("Chama a API com: ", data);
  });

  return { handleSubmit, register, errors };
}
