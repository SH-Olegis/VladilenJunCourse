import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        console.log(data)
        return data;
    },
    add: async (data) => {
        const { data: requestedData } = await httpService.post(todosEndepoint, JSON.stringify(data), {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        return requestedData;
    }
};
export default todosService;
