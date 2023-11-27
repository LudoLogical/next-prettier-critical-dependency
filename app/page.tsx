"use client";

import { useEffect } from "react";
import prettier from "prettier";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";

export default function Home() {
  useEffect(() => {
    const makePrettier = async () => {
      console.log(
        await prettier.format(
          "export default function Test(){return(<p>hi</p>);}",
          { parser: "babel", plugins: [babelPlugin, estreePlugin] }
        )
      );
    };
    makePrettier();
  }, []);
  return null;
}
