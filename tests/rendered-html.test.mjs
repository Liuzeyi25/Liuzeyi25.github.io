import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the revised academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Selected Publications/);
  assert.match(html, /Education/);
  assert.match(html, /Reviewer/);
  assert.match(html, />PINE Lab<\/a>/);
  assert.doesNotMatch(html, /Perception and Embodied Intelligence/);
  assert.doesNotMatch(html, /：入选2025年/);
  assert.doesNotMatch(html, /sidebar-summary/);
  assert.match(html, /4 granted national invention patents/);
  assert.doesNotMatch(html, /id="research"/);
  assert.doesNotMatch(html, /id="projects"/);
  assert.doesNotMatch(html, /Selected Projects/);

  const publicationList = html.match(/<ol class="publication-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.ok(publicationList, "publication list should be rendered");
  assert.equal((publicationList.match(/<li>/g) ?? []).length, 5);
});

test("keeps verified publication and reviewer metadata in source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Zeyi Liu<\/strong>, Weihua Gui, Keke Huang, Dehao Wu, Chunhua Yang/);
  assert.match(page, /Guangyao Liu, Yinuo Qu, Yuquan Xue, Bofang Jia/);
  assert.match(page, /Yuquan Xue, Le Xu, <strong>Zeyi Liu<\/strong>, Zhenyu Wu, Zhengyi Gu, Xinyang Song, Bofang Jia/);
  assert.match(page, /IEEE Transactions on Industrial Informatics \(TII\)/);
  assert.match(page, /IEEE Transactions on Automation Science and Engineering \(TASE\)/);
  assert.match(page, /IET Cyber-Physical Systems/);
  assert.match(page, /Conference on Robot Learning \(CoRL\)/);
  assert.match(page, /\["2024", "Third Prize, China Graduate Mathematical Contest in Modeling"\]/);
  assert.match(page, /\["2020", "National Scholarship"\]/);
  assert.match(page, /\["2019", "National Scholarship"\]/);
  assert.doesNotMatch(page, /Young Elite Scientists Sponsorship Program|Outstanding Graduate, Central South University/);
  assert.doesNotMatch(page, /const researchAreas|const projects|id="research"|id="projects"/);
});
