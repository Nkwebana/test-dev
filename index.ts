const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(Bun.file("index.html"));
  },
});

console.log(`Listening on localhost:${server.port}`);
