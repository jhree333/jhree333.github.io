---
title: "test code sample"
date: "2023-06-22"
description: "test code sample 테스트"
image: test-code.png
---

```js[class="line-numbers"]
import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import "@/styles/prism.css";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
```
