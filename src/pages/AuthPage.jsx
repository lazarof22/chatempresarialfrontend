import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AuthPage.css";

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  const { signup, signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const registerForm = useForm();
  const loginForm = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  const onRegister = registerForm.handleSubmit(async (values) => {
    await signup(values);
  });

  const onLogin = loginForm.handleSubmit(async (values) => {
    await signin(values);
  });

  return (
    <main className="auth-page">
      <section className={`auth-card ${showLogin ? "show-login" : ""}`}>
        {/* Registro */}
        <div className="auth-form-panel register-panel">
          <form className="auth-form" onSubmit={onRegister}>
            <p className="auth-eyebrow">COMIENZA HOY</p>
            <h1>Crear cuenta</h1>
            <p className="auth-subtitle">Regístrate para comenzar.</p>

            <label className="auth-input-wrap">
              <span className="field-icon" aria-hidden="true">♙</span>
              <input
                type="text"
                placeholder="Nombre de usuario"
                autoComplete="username"
                {...registerForm.register("username", {
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Usa al menos 3 caracteres",
                  },
                })}
              />
            </label>
            {registerForm.formState.errors.username && (
              <span className="auth-error">
                {registerForm.formState.errors.username.message}
              </span>
            )}

            <label className="auth-input-wrap">
              <span className="field-icon" aria-hidden="true">✉</span>
              <input
                type="email"
                placeholder="Correo electrónico"
                autoComplete="email"
                {...registerForm.register("email", {
                  required: "El correo electrónico es obligatorio",
                })}
              />
            </label>
            {registerForm.formState.errors.email && (
              <span className="auth-error">
                {registerForm.formState.errors.email.message}
              </span>
            )}

            <label className="auth-input-wrap">
              <span className="field-icon" aria-hidden="true">♙</span>
              <input
                type="password"
                placeholder="Contraseña"
                autoComplete="new-password"
                {...registerForm.register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />
            </label>
            {registerForm.formState.errors.password && (
              <span className="auth-error">
                {registerForm.formState.errors.password.message}
              </span>
            )}

            <button className="auth-submit" type="submit">
              REGISTRARME
            </button>

            <p className="mobile-switch">
              ¿Ya tienes cuenta?{" "}
              <button type="button" onClick={() => setShowLogin(true)}>
                Inicia sesión
              </button>
            </p>
          </form>
        </div>

        {/* Inicio de sesión */}
        <div className="auth-form-panel login-panel">
          <form className="auth-form" onSubmit={onLogin}>
            <p className="auth-eyebrow">QUÉ BUENO TENERTE DE VUELTA</p>
            <h1>Iniciar sesión</h1>
            <p className="auth-subtitle">Introduce tus datos para continuar.</p>

            <label className="auth-input-wrap">
              <span className="field-icon" aria-hidden="true">♙</span>
              <input
                type="text"
                placeholder="Nombre de usuario"
                autoComplete="username"
                {...loginForm.register("username", {
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Usa al menos 3 caracteres",
                  },
                })}
              />
            </label>
            {loginForm.formState.errors.username && (
              <span className="auth-error">
                {loginForm.formState.errors.username.message}
              </span>
            )}

            <label className="auth-input-wrap">
              <span className="field-icon" aria-hidden="true">♙</span>
              <input
                type="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                {...loginForm.register("password", {
                  required: "La contraseña es obligatoria",
                })}
              />
            </label>
            {loginForm.formState.errors.password && (
              <span className="auth-error">
                {loginForm.formState.errors.password.message}
              </span>
            )}

            <button className="auth-submit" type="submit">
              ENTRAR
            </button>

            <p className="mobile-switch">
              ¿No tienes cuenta?{" "}
              <button type="button" onClick={() => setShowLogin(false)}>
                Regístrate
              </button>
            </p>
          </form>
        </div>

        {/* Panel turquesa deslizante */}
        <div className="auth-overlay">
          <div className="overlay-panel overlay-right">
            <span className="overlay-mark">GiChat</span>
            <h2>¡Bienvenido de nuevo!</h2>
            <p>
              Crea tu cuenta y descubre todo lo que tenemos preparado para ti.
            </p>
            <button className="overlay-button"
              type="button"
              onClick={() => setShowLogin(true)}>
              INICIAR SESIÓN
            </button>
          </div>

          <div className="overlay-panel overlay-left">
            <span className="overlay-mark">GiChat</span>
            <h2>¡Hola, bienvenido!</h2>
            <p>
              Nos alegra volver a verte. Inicia sesión con tus datos y continúa
              disfrutando de tu espacio.
            </p>
            <button
              className="overlay-button"
              type="button"
              onClick={() => setShowLogin(false)}
            >
              CREAR CUENTA
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
