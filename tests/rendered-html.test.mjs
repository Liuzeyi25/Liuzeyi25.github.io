import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const publicOutput = new URL("../dist/client/", import.meta.url);

test("exports the revised academic homepage as static HTML", async () => {
  const html = await readFile(new URL("index.html", publicOutput), "utf8");
  assert.match(html, /Selected Publications/);
  assert.match(html, /Education/);
  assert.match(html, /Reviewer/);
  for (const section of ["about", "news", "publications", "education", "reviewer", "honors", "outputs"]) {
    assert.ok(html.includes(`id="${section}"`), `must render the ${section} section`);
  }

  const publicationList = html.match(/<ol class="publication-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.ok(publicationList, "publication list should be rendered");
  assert.ok((publicationList.match(/<li>/g) ?? []).length > 0, "must render publication entries before JavaScript runs");
});

test("exports GitHub Pages metadata and every referenced local asset", async () => {
  const html = await readFile(new URL("index.html", publicOutput), "utf8");
  assert.match(html, /<link[^>]*rel="canonical"[^>]*href="https:\/\/liuzeyi25\.github\.io\/"/);
  assert.match(html, /<meta[^>]*property="og:image"[^>]*content="https:\/\/liuzeyi25\.github\.io\/og\.png"/);
  assert.doesNotMatch(html, /chatgpt\.site|\/_vinext\/image/);

  const localAssets = [...html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]+)(?:[?#][^"]*)?"/g)]
    .map((match) => match[1])
    .filter((path) => path !== "/");
  assert.ok(localAssets.some((path) => path.endsWith(".css")), "must export the stylesheet");
  assert.ok(localAssets.includes("/profile.jpg"), "must export the profile image");
  assert.match(html, /class="visitor-globe"/);
  assert.match(html, /aria-label="View live visitor statistics on MapMyVisitors"/);
  assert.match(html, /href="https:\/\/mapmyvisitors\.com\/web\/1c8ie"/);
  assert.match(html, /id="mapmyvisitors-tracker-host"/);
  assert.doesNotMatch(html, /mapmyvisitors\.com\/globe\.js/, "tracker must not execute during static rendering");
  for (const path of new Set([...localAssets, "/og.png"])) {
    await access(new URL(`.${path}`, publicOutput));
  }
});

test("loads the visitor tracker only on the production hostname", async () => {
  const tracker = await readFile(new URL("../app/map-my-visitors-tracker.tsx", import.meta.url), "utf8");
  assert.match(tracker, /window\.location\.hostname !== "liuzeyi25\.github\.io"/);
  assert.match(tracker, /https:\/\/mapmyvisitors\.com\/globe\.js\?d=13jUMirMAJnP2c1fsQX0pFNeS3qvzUU11sSoac1KKp0/);
  assert.match(tracker, /document\.getElementById\(TRACKER_SCRIPT_ID\)/, "tracker must guard against duplicate loads");

  const stylesheet = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(stylesheet, /\.mapmyvisitors-tracker\s*\{[\s\S]*?width:\s*100px;[\s\S]*?height:\s*110px;/);
  assert.doesNotMatch(stylesheet, /left:\s*-10000px/, "the native rotating globe must remain visible");
});
