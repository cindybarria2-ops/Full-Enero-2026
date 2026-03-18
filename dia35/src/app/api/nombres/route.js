let nombres = []; // memoria temporal

export async function POST(req) {
  const body = await req.json();

  if (!body.nombre) {
    return Response.json(
      { error: "Nombre requerido" },
      { status: 400 }
    );
  }

  nombres.push(body.nombre);

  return Response.json({
    recibido: true,
  });
}

// GET para obtener la lista
export async function GET() {
  return Response.json({
    nombres,
  });
}