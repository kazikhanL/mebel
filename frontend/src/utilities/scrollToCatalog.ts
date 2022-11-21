const scrollToCatalog = (): void => {
    const catalogElement: HTMLDivElement | null = document.querySelector("#catalog");

    if (catalogElement === null) return;

    setTimeout(() => {
        catalogElement.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    }, 300);
};

export default scrollToCatalog;
