export const httpGet = (path: string, params?: any) =>
    fetch(
        `${path}?` +
            new URLSearchParams({
                ...params
            })
    ).then((res: Response) => res);

export const httpUpdate = (path: string, body: BodyInit) =>
    fetch(`${path}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        body
    }).then((res: Response) => res);

export const httpDelete = (path: string): Promise<Response> =>
    fetch(`${path}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    }).then((res) => res);
