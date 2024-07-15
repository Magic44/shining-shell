import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead, e as addAttribute } from './astro/server_D3Anw5ff.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_DSgUYMjq.mjs';
import { g as getHomePermalink } from './permalinks_BhXHoTNL.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `Error 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
But dont worry, you can find plenty of other things on our homepage.
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Back to homepage</a> </div> </div> </section> ` })}`;
}, "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/404.astro", void 0);

const $$file = "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
