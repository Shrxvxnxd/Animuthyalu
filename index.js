export default {
  async fetch(request) {
    return new Response("Hello from Cloudflare Worker!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response("Hello, world!", { status: 200 });
}
addEventListener("scheduled", (event) => {
  event.waitUntil(runTask());
});

async function runTask() {
  console.log("Scheduled task running...");
}

addEventListener("fetch", (event) => {
  event.respondWith(new Response("Hello, world!", { status: 200 }));
});
