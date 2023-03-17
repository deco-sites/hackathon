import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    const url =
      "https://us06web.zoom.us/j/82649858152?pwd=Qm4rWHlEZzhtaXJCaGhlRzhvMUp4QT09";

    return new Response(`Redirecting to ${url}`, {
      status: 301,
      headers: {
        Location: url,
      },
    });
  },
};
