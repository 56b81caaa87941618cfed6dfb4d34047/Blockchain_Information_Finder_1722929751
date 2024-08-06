/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722929754", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-b from-purple-900 to-black min-h-screen flex items-center justify-center">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-purple-800 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70 bg-purple-600"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-aqua-400"></div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#9333EA" /><stop offset="100%" stop-color="#06B6D4" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-transparent bg-clip-text pb-3 bg-gradient-to-r from-purple-300 to-aqua-300">Your Gateway to Cutting-Edge Blockchain Information</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-transparent bg-clip-text pb-4 bg-gradient-to-r from-white via-purple-100 to-white text-4xl font-bold"> Discover the Latest in Blockchain</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-purple-100">Stay ahead of the curve with real-time blockchain insights and updates at your fingertips.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-300 ease-in-out group bg-gradient-to-r from-purple-500 to-aqua-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-aqua-600 hover:shadow-xl">
                        Get Started 
                        <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out ml-1 text-aqua-300">-&gt;</span>
                    </a>
                </div>
            </div>
        </div>
    </section>`,
}
        data() {
            return {
                expanded: false, 
                radialGradientPrimaryStyle: "bg-purple-600",
                radialGradientSecondaryStyle: "bg-aqua-400",
                stopColorPrimaryStyle: "#9333EA",
                stopColorSecondaryStyle: "#06B6D4",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-purple-300 to-aqua-300",
                contentCtaTitleStyle: "bg-gradient-to-r from-white via-purple-100 to-white",
                contentBodyStyle: "text-purple-100",
                contentCtaButtonPrimaryStyle:"text-white",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-purple-500 to-aqua-500",
                contentCtaButtonHoverStyle: "hover:from-purple-600 hover:to-aqua-600 hover:shadow-xl",
                contentCtaArrowStyle: "text-aqua-300"
        },
    });
                    