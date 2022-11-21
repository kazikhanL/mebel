import { gql, DocumentNode } from "@apollo/client";

const getCatalogCardsSchema = (
    page: number,
    pageSize: number,
    categoryID: number,
    subCategoryName: string | null,
    filter: string | null,
    sort?: "asc" | "desc" | null,
): DocumentNode => {
    const DEFAULT_PAGE_SIZE = 16;
    const startPage = page - (pageSize / DEFAULT_PAGE_SIZE) + 1;

    return gql`
        query Cards {
            cards(
                pagination: { page: ${startPage}, pageSize: ${pageSize} }
                filters: {
                    and: [
                        { categories: { id: { eq: ${categoryID} } } }
                        ${subCategoryName !== null ? `{ sub_categories: { shortInfo: { name: { eq: "${subCategoryName}" } } } }` : ""}
                        ${filter !== null ? `{ filters: { name: { eq: "${filter}" } } }` : ""}
                    ]
                }
                ${sort ? `sort: ["index:desc", "price.price:${sort}"]` : "sort: \"index:desc\""}
            ) {
                data {
                    id
                    attributes {
                        meta {
                            title
                            description
                            url
                        }
                        gallery {
                            data {
                                id
                                attributes {
                                    url
                                }
                            }
                        }
                        name
                        subTitle
                        description
                        size
                        color
                        material
                        similarTags {
                            id
                            name
                            url
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
                        code
                        disposable
                        price {
                            priceDescription
                            price
                            secondDayPrice
                        }
                        # комплектации
                        cards {
                            data {
                                id
                                attributes {
                                    meta {
                                        url
                                    }
                                    name
                                    code
                                    gallery {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        # рекомендации
                        recommended {
                            data {
                                id
                                attributes {
                                    meta {
                                        url
                                    }
                                    code
                                    name
                                    price {
                                        price
                                        priceDescription
                                        secondDayPrice
                                    }
                                    gallery {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        # популярное
                        similars {
                            data {
                                id
                                attributes {
                                    meta {
                                        url
                                    }
                                    code
                                    name
                                    price {
                                        price
                                        priceDescription
                                        secondDayPrice
                                    }
                                    gallery {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                meta {
                    pagination {
                        total
                    }
                }
            }
        }    
    `;
};

export default getCatalogCardsSchema;
