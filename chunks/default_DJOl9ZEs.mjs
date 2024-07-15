const _default = new Proxy({"src":"/_astro/default.CczmzLWf.png","width":2560,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/haloG/Desktop/Astro/shining-shell/src/assets/images/default.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/haloG/Desktop/Astro/shining-shell/src/assets/images/default.png");
							return target[name];
						}
					});

export { _default as default };
