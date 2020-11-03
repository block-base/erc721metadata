import * as fs from "fs";
import { Metadata } from "./types";

import tataminin from "../public/contents/tataminin/assets.json";
const OUTPUT_PATH_BASE = "./public/contents/assets.json";
const assets = {
  tataminin,
};

fs.writeFileSync(OUTPUT_PATH_BASE, JSON.stringify(assets));
