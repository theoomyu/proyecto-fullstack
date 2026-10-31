import { Link, useNavigate } from "react-router"

export const Pagina404 = () => {
  const navigate = useNavigate()

  return (
    <main className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-background px-6 py-20">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 size-80 rounded-full border border-accent/20"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 size-96 rounded-full bg-accent/5"
      />

      <section className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="size-2 rounded-full bg-accent" />
            Recurso no encontrado
          </div>

          <p className="mb-2 text-[clamp(6rem,18vw,12rem)] font-extrabold leading-[0.75] tracking-[-0.08em] text-primary">
            404
          </p>

          <div className="mb-7 mt-10 h-px w-16 bg-accent" />

          <h1 className="mb-5 max-w-xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Parece que esta página tomó{" "}
            <span className="text-accent">otra ruta.</span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-muted md:text-lg">
            No encontramos la página o recurso que estás buscando. Es posible
            que haya cambiado de dirección, haya sido eliminado o que el enlace
            no sea correcto.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Volver al inicio
              <span aria-hidden="true">↘</span>
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-primary/25 bg-surface px-6 py-3.5 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <span aria-hidden="true">←</span>
              Volver atrás
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-6 rounded-[3rem] border border-accent/10" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 shadow-[0_30px_80px_rgba(22,44,69,0.10)] md:p-12">
            <div className="mb-12 flex items-center justify-between">
              <div className="flex gap-2" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-danger/60" />
                <span className="size-2.5 rounded-full bg-warning/70" />
                <span className="size-2.5 rounded-full bg-success/70" />
              </div>

              <span className="rounded-full border border-primary/15 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                sistema / error
              </span>
            </div>

            <div className="relative mx-auto grid aspect-square max-w-72 place-items-center">
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <div className="absolute inset-8 rounded-full border border-dashed border-accent/40" />
              <div className="absolute inset-16 rounded-full bg-background" />

              <svg
                viewBox="0 0 120 120"
                className="relative z-10 size-32 text-primary"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M31 88L48 69M89 88L72 69"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M39 47C39 35.4 48.4 26 60 26C71.6 26 81 35.4 81 47V67C81 78.6 71.6 88 60 88C48.4 88 39 78.6 39 67V47Z"
                  stroke="currentColor"
                  strokeWidth="5"
                />
                <circle cx="51" cy="54" r="4" fill="currentColor" />
                <circle cx="69" cy="54" r="4" fill="currentColor" />
                <path
                  d="M51 70C56.5 65.5 63.5 65.5 69 70"
                  stroke="#C9A253"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M60 15V25"
                  stroke="#C9A253"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="11" r="4" fill="#C9A253" />
              </svg>

              <span className="absolute left-5 top-16 size-3 rounded-full bg-accent" />
              <span className="absolute bottom-10 right-9 size-2 rounded-full bg-primary/40" />
              <span className="absolute right-2 top-24 size-1.5 rounded-full bg-accent/60" />
            </div>

            <div className="mt-10 flex items-center justify-between gap-5 border-t border-foreground/10 pt-6">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
                  Estado
                </p>
                <p className="mb-0 font-semibold text-foreground">
                  Ruta inexistente
                </p>
              </div>

              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-xl text-accent">
                !
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}