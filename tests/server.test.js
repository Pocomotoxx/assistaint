import { test } from 'node:test';
import { strict as assert } from 'assert';
import fs from 'fs';

test('server.js file should exist', () => {
  assert.ok(fs.existsSync('./server/server.js'));
});

test("server exposes extract endpoint", () => {
  const text = fs.readFileSync("./server/server.js", "utf8");
  assert.ok(text.includes("/api/extract"));
});
