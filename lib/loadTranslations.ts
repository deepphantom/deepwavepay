import fs from "fs";
import path from "path";

export async function loadTranslations(locale: string) {
  const filePath = path.resolve(`./locales/${locale}.json`);
  const messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return messages;
}
