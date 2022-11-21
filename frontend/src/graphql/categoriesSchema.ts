import { gql, DocumentNode } from "@apollo/client";

const categoriesSchema = (): DocumentNode => {
    return gql`
        query Categories {
            categories(pagination: { pageSize: 101 }) {
                data {
                    id
                    attributes {
                        shortInfo {
                            id
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
}; 

export default categoriesSchema;
