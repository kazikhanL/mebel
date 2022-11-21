import { gql, DocumentNode } from "@apollo/client";


const getCardIDSchema = (id: number): DocumentNode => {
    return gql`
        query OneCard {
            card(id: ${id}) {
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
                                    disposable
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
                                    disposable
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
            }
        }    
    `;
};

export default getCardIDSchema;
