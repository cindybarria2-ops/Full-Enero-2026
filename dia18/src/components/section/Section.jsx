import react from 'react'
export default function Section({ title, children }) {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div>{children}</div>
        </section>
    );
}