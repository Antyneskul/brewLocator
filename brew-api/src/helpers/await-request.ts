import * as request from 'request';

const asyncRequest = async (url: request.UriOptions & request.CoreOptions) =>
    new Promise((resolve, reject) => {
        request(url, (error, response, data) => {
            if (error) reject(error);
            else resolve(data)
        })
    });

export default asyncRequest;
