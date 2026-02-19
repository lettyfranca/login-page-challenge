import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Page", () => {
    it("renderiza título principal", () => {
        render(<Login />);
        expect(
        screen.getByRole("heading", { name: /login to your account/i })
        ).toBeInTheDocument();
    });

    it("renderiza campo de email", () => {
        render(<Login />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it("renderiza campo de senha", () => {
        render(<Login />);
        expect(
            screen.getByLabelText(/^password$/i)
        ).toBeInTheDocument();
    });


    it("renderiza botão de login", () => {
        render(<Login />);
        expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    });
});
