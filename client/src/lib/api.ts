const SERVER_URL = "http://localhost:5000/api";

export type Fetch = typeof fetch;

export class ServerApiAdapter {
  constructor(
    private fetch: Fetch,
    private token: string | undefined,
    private delay: (ms: number) => Promise<void> = delay,
  ) {}

  async getFilms(): Promise<string[]> {
    const headers: HeadersInit = {
      "User-Agent": "Planet Clone",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return Promise.race([
      this.delay(4000).then(() => ({ response: "timeout" })),
      this.fetch(`${SERVER_URL}/films`, {
        headers,
      }).then((res) => res.json()),
    ]);
  }
}
