import Section from "../section/Section";
export default function Main({ title, children }) {
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div>{children}</div>
            <Section title={"Seccion adicional de ejemplo"}>
            </Section>
        </main>
    );
}