let navItems = document.querySelectorAll(selectors.selectAllLisUnderNavItems);
for (let item of navItems) {
    item.addEventListener(listenerTypes.click, event => {
            const select = document.querySelector(selectors.selectAllActiveLisUnderNavItems);

            if (select !== undefined && select !== null) {
                select.classList.remove(tokens.active);
            }

            event.currentTarget.classList.add(tokens.active);
        }
    );
}
