export default function BlogPost({ params }) {
  const { category, post } = params;

  return (
    <main>
      <h1>Blog</h1>
      <p>Categoría: {category}</p>
      <p>Post: {post}</p>
    </main>
  );
}