const googlePlay = new Proxy({"src":"/_astro/google-play.ISTMcpLO.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/haloG/Desktop/Astro/shining-shell/src/assets/images/google-play.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/haloG/Desktop/Astro/shining-shell/src/assets/images/google-play.png");
							return target[name];
						}
					});

export { googlePlay as default };
