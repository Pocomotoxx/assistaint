import { test } from 'node:test';
import { strict as assert } from 'assert';
import fs from 'fs';

test('server.js file should exist', () => {
  assert.ok(fs.existsSync('./server/server.js'));
});
