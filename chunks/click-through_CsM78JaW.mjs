import { a as createComponent, b as renderTemplate, d as renderComponent } from './astro/server_D3Anw5ff.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from './LandingLayout_Dtimy6Iy.mjs';
import { $ as $$Hero2 } from './Hero2_DqjjRSWu.mjs';
import { $ as $$CallToAction } from './CallToAction_DJCWlv3o.mjs';

const $$ClickThrough = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Click-through Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Click-through Demo", "title": "Click-through Landing Page: The Perfect Bridge to Conversion!", "subtitle": "Learn how to design a Click-Through Landing Page that seamlessly guides visitors to your main offer.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Click-through Landing Page Hero Image"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/landing/click-through.astro", void 0);

const $$file = "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/landing/click-through.astro";
const $$url = "/landing/click-through";

export { $$ClickThrough as default, $$file as file, $$url as url };
