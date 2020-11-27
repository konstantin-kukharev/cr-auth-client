export const getCurrentPageIndex = store => {
    return store.currentPageIndex;
}

export const getCurrentPage = store => {
    return store.menu[getCurrentPageIndex()]
}

export const getAllPages = store => {
    return store.menu
}