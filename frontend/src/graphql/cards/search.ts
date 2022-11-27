import { gql, DocumentNode } from "@apollo/client";

const getSearchSchema = (search: string): DocumentNode => {
    return gql`
        query Search {
            cards(
                pagination: { pageSize: 33 }
                filters: {
                    or: [
                        { code:{ eq: "${search}"} }
                        { name: { startsWith: "${search}" } }
                        { search: { containsi: "${search}" } },
                        { search: { containsi: "${search.toLowerCase()}" } },
                        { search: { containsi: "${search[0].toUpperCase() + search.slice(1)}" } },
                    ]
                }
            ) {
                data {
                    id
                    attributes {
                        name
                        code
                        gallery {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        categories {
                            data {
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
                }
            }
        }
    `;
};

export default getSearchSchema;
