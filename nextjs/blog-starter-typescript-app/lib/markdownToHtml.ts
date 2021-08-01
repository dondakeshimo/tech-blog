import unified from 'unified'
import remarkParse from 'remark-parse'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(math)
  .use(remark2rehype)
  .use(katex)
  .use(stringify)
  .process(markdown)
  return result.toString()
}
