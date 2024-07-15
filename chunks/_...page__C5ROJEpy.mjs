import { f as createAstro, a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_D3Anw5ff.mjs';
import 'kleur/colors';
import { c as getStaticPathsBlogTag, d as blogTagRobots } from './blog_B48-P7uP.mjs';
import { $ as $$PageLayout } from './PageLayout_BM6LZ8tA.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from './Pagination_BWGQ6-bk.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogTag({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, tag } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Posts by tag '${tag.title}'${currentPage > 1 ? ` \u2014 Page ${currentPage} ` : ""}`,
    robots: {
      index: blogTagRobots?.index,
      follow: blogTagRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Tag: ${tag.title}` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/[...blog]/[tag]/[...page].astro", void 0);

const $$file = "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/[...blog]/[tag]/[...page].astro";
const $$url = "/[...blog]/[tag]/[...page]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
