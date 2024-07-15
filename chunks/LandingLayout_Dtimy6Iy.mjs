import { f as createAstro, a as createComponent, b as renderTemplate, d as renderComponent, F as Fragment, i as renderSlot } from './astro/server_D3Anw5ff.mjs';
import 'kleur/colors';
import { b as $$Header, h as headerData, $ as $$PageLayout } from './PageLayout_BM6LZ8tA.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["announcement"])} ` })}`, "default": ($$result2) => renderTemplate`   ${renderSlot($$result2, $$slots["default"])} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["header"], renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": headerData?.links[2] ? [headerData.links[2]] : void 0, "actions": [
    {
      text: "Download",
      href: "https://github.com/onwidget/astrowind"
    }
  ], "showToggleTheme": true, "position": "right" })} `)} ` })}` })}`;
}, "C:/Users/haloG/Desktop/Astro/shining-shell/src/layouts/LandingLayout.astro", void 0);

export { $$LandingLayout as $ };
