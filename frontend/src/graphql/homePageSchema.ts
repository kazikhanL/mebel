import { gql, DocumentNode } from "@apollo/client";

const homePageSchema = (): DocumentNode => {
    return gql`
        query HomePage {
            home {
                data {
                    attributes {
                        meta {
                            title
                            description
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
                        description {
                            id
                            title
                            text
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
                    }
                }
            }
            articles(pagination: { pageSize: 6 }) {
                data {
                    id
                    attributes {
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
                            url
                        }
                        promo {
                            H1
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
        }
    `;
};

export default homePageSchema;
