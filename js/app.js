(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const toggleLocationList = () => {
        const locationBlocks = document.querySelectorAll(".location-block");
        if (!locationBlocks.length) {
            console.error("No location blocks found!");
            return;
        }
        const closeAllBlocksExcept = exceptBlock => {
            locationBlocks.forEach((block => {
                if (block !== exceptBlock && block.classList.contains("open")) block.classList.remove("open");
            }));
        };
        const toggleBlock = block => {
            const isOpen = block.classList.contains("open");
            closeAllBlocksExcept(isOpen ? null : block);
            block.classList.toggle("open");
        };
        const handleClick = event => {
            const target = event.target;
            const button = target.closest(".location-block__button");
            if (button) {
                const block = button.closest(".location-block");
                if (block) {
                    toggleBlock(block);
                    return;
                }
            }
            closeAllBlocksExcept(null);
        };
        document.addEventListener("click", handleClick);
    };
    toggleLocationList();
    window["FLS"] = true;
})();