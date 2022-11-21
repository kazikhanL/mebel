import { gql, DocumentNode } from "@apollo/client";

export const catalogSlugPaths = gql`
    query CatalogPagePaths {
        categories(pagination: { pageSize: 101 }) {
            data {
                id
                attributes {
                    meta {
                        url
                    }
                    promo {
                        H1
                    }
                }
            }
        }
        thematicCategories(pagination: { pageSize: 101 }) {
            data {
                id
                attributes {
                    meta {
                        url
                    }
                    promo {
                        H1
                    }
                }
            }
        }
    }
`;

export const getAllCatalogPages = (): DocumentNode => {
    return gql`
        query CatalogPage {
            categories(pagination: { pageSize: 101 }) {
                data {
                    id
                    attributes {
                        meta {
                            title
                            description
                            url
                        }
                        promo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            mobilImage {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            H1
                            subTitle
                        }
                        seo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            title
                            content
                        }
                        filters {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        sub_categories {
                            data {
                                id
                                attributes {
                                    meta {
                                        title
                                        description
                                        url
                                    }
                                    promo {
                                        H1
                                        subTitle
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        mobilImage {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                    seo {
                                        title
                                        content
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                    shortInfo {
                                        name
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                    cardInfo {
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        title
                                        subTitle
                                    }
                                }
                            }
                        }
                        shortInfo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            name
                        }
                        cardInfo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            title
                            subTitle
                        }
                    }
                }
            }
            thematicCategories(pagination: { pageSize: 101 }) {
                data {
                    id
                    attributes {
                        meta {
                            title
                            description
                            url
                        }
                        promo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            mobilImage {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            H1
                            subTitle
                        }
                        seo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            title
                            content
                        }
                        filters {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        sub_categories {
                            data {
                                id
                                attributes {
                                    meta {
                                        title
                                        description
                                        url
                                    }
                                    promo {
                                        H1
                                        subTitle
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        mobilImage {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                    seo {
                                        title
                                        content
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                    shortInfo {
                                        name
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                    cardInfo {
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        title
                                        subTitle
                                    }
                                }
                            }
                        }
                        shortInfo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            name
                        }
                        cardInfo {
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            title
                            subTitle
                        }
                    }
                }
            }
            faq {
                data {
                    attributes {
                        faqItems {
                            id
                            question
                            answer
                        }
                    }
                }
            }
            articles(pagination: { pageSize: 6 }) {
                data {
                    id
                    attributes {
                        meta {
                            url
                        }
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        H1
                        date
                    }
                }
            }
        }
    `;
};