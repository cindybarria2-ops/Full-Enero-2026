import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>Acerca de</h1>
      <p>Esta es la página de Acerca de</p>
      <Link href="/">
        Ir a Inicio
      </Link>
    </main>
  );
}