import { gql, DocumentNode } from "@apollo/client";

export const newsPathsSchema = (): DocumentNode => {
    return gql`
        query NewsPath {
            articles(pagination: { pageSize: 10000 }) {
                data {
                    id
                    attributes {
                        meta {
                            url
                        }
                        H1
                    }
                }
            }
        }
    `;
};

export const getNewsSchema = (): DocumentNode => {
    return gql`
        query News {
            articles(pagination: { pageSize: 10000 }) {
                data {
                    id
                    attributes {
                        meta {
                            title
                            description
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
                        content
                        date
                        goods {
                            id
                            name
                            url
                        }
                    }
                }
            }
        }
    `;
};
