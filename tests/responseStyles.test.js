import { test } from 'node:test';
import { strict as assert } from 'assert';
import fs from 'fs';

const file = fs.readFileSync('./src/api/chatbotResponseStyles.ts', 'utf8');
const presets = file.match(/name:\s*"/g) || [];

test('style preset file should define at least 12 presets', () => {
  assert.ok(presets.length >= 12);
});
