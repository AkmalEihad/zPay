import {z} from "zod";

const passwordValidation = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/
);

export const SignUpSchema = z.object({
    username: z
        .string().min(3, {message: " "})
        .max(30),
    email: z
        .string()
        .email({message: " "}),
    phone: z
        .string()
        .min(10, {message: ' '})
        .max(14, {message: ' '})
        .refine((val) => !isNaN(val as unknown as number), {
            message: "Phone Number must contains only numbers",
        }),
    password: z
        .string()
        .min(6, {message: "Password must be at least 6 characters long"})
        .regex(passwordValidation, {
            message: 'Password Must contains Capital letters and Numbers',
        }),
    confirmPassword: z
        .string()
});


export const SignInSchema = z.object({
    email: z
        .string()
        .email({message: "Invalid email address"}),
    password: z
        .string()
        .min(6, {message: "Password must be at least 6 characters long"}),
})


export const RujukanAPISchema = z.object({
    email: z
        .string().email({message: "Invalid email address"}),
    fullname: z
        .string().min(2).max(255),
    phone: z
        .string()
        .min(10, {message: 'Must be a valid mobile number'})
        .max(14, {message: 'Must be a valid mobile number'}),
    permohonan: z
        .string().min(2),
})