/* eslint-disable @typescript-eslint/no-explicit-any */

import { SERVER } from "@constants";

const parseImage = (rawImage: any): string => {
    return `${SERVER}${rawImage.data.attributes.url}`;
};

export default parseImage;
