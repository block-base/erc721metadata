import * as fs from "fs";
import template from "./template.json";
import { Metadata } from "../types";

const count = 100;
const OUTPUT_PATH_BASE = "./public/metadata/contents/tataminin/";

const metadatas: Metadata[] = [];
for (let i = 1; i <= count; i++) {
  const metadata: Metadata = {
    ...template,
    id: i.toString(),
    name: `${template.name} #${i}`,
  };
  fs.writeFileSync(`${OUTPUT_PATH_BASE}${i}.json`, JSON.stringify(metadata));
  metadatas.push(metadata);
}

fs.writeFileSync(`${OUTPUT_PATH_BASE}assets.json`, JSON.stringify(metadatas));
