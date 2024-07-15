import { a as createComponent, b as renderTemplate, d as renderComponent } from './astro/server_D3Anw5ff.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from './LandingLayout_Dtimy6Iy.mjs';
import { $ as $$Hero } from './Hero_BqiJk60t.mjs';
import { $ as $$CallToAction } from './CallToAction_DJCWlv3o.mjs';

const $$Product = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Product Details Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Product Details Demo", "title": "Product Landing Page: Showcase with Precision and Passion!", "subtitle": "Step-by-step guide to designing a Landing Page that highlights every facet of your product or service.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2174&q=80",
    alt: "A spotlight on a product. Product Details Landing Page Demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/landing/product.astro", void 0);

const $$file = "C:/Users/haloG/Desktop/Astro/shining-shell/src/pages/landing/product.astro";
const $$url = "/landing/product";

export { $$Product as default, $$file as file, $$url as url };
