import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const publicOutput = new URL("../dist/client/", import.meta.url);

test("exports the revised academic homepage as static HTML", async () => {
  const html = await readFile(new URL("index.html", publicOutput), "utf8");
  assert.match(html, /Selected Publications/);
  assert.match(html, /Education/);
  assert.match(html, /Reviewer/);
  assert.match(html, />PINE Lab<\/a>/);
  assert.doesNotMatch(html, /Perception and Embodied Intelligence/);
  assert.doesNotMatch(html, /：入选2025年/);
  assert.doesNotMatch(html, /sidebar-summary/);
  assert.match(html, /4 granted national invention patents/);
  assert.match(html, /A Diffusion-based Unified Framework for Open-World Dynamic Wheel Recognition System Construction and Maintenance with Incomplete Data/);
  assert.match(html, /href="https:\/\/github\.com\/Liuzeyi25\/TCYB-STS-DM"[^>]*>Code<\/a>/);
  assert.match(html, /href="https:\/\/anonymous\.4open\.science\/r\/HILRL-A1X-BC05"[^>]*>Code<\/a>/);
  assert.match(html, /href="https:\/\/xxreinsno\.github\.io\/worldsample\/"[^>]*>Website<\/a>/);
  assert.doesNotMatch(html, /id="research"/);
  assert.doesNotMatch(html, /id="projects"/);
  assert.doesNotMatch(html, /Selected Projects/);

  const publicationList = html.match(/<ol class="publication-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.ok(publicationList, "publication list should be rendered");
  assert.equal((publicationList.match(/<li>/g) ?? []).length, 5);
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
  for (const path of new Set([...localAssets, "/og.png"])) {
    await access(new URL(`.${path}`, publicOutput));
  }
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
