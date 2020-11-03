import * as fs from "fs";
// import * as path from "path";
import template from "./template.json";

interface Metadata {
  name: string;
  description: string;
  external_url: string;
  image: string;
}

const count = 100;
const OUTPUT_PATH_BASE = "./public/v1/tataminin/";

for (let i = 1; i <= count; i++) {
  const metadata: Metadata = {
    ...template,
    id: i.toString(),
    name: `${template.name} #${i}`,
  };
  fs.writeFileSync(`${OUTPUT_PATH_BASE}${i}.json`, JSON.stringify(metadata));
}
