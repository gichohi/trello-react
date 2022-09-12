import axios from 'axios';

const url = 'https://api.trello.com/1/boards/6305f6a02fae675940920902/lists?key=36c99831f2f6a19f2f4fac7201302680&token=a11734ce1c0d88d50a2d3c0b1151062fe1d8736d97f615b7ef7dbe699a772631';

export const fetchLists = async () => await axios.get<ITask[]>(url);

export const fetchCardsFromList = async (id: string) => {
    const cardUrl = `https://api.trello.com/1/lists/${id}/cards?key=36c99831f2f6a19f2f4fac7201302680&token=a11734ce1c0d88d50a2d3c0b1151062fe1d8736d97f615b7ef7dbe699a772631`
    const tasks = await axios.get<ITask[]>(cardUrl);
    return tasks;
}

export const postCardToList = async (idList: string, name: string) => {

    const postUrl = "https://api.trello.com/1/cards";
    const data = {
        idList: idList,
        key: "36c99831f2f6a19f2f4fac7201302680",
        token: "a11734ce1c0d88d50a2d3c0b1151062fe1d8736d97f615b7ef7dbe699a772631",
        name: name
    };
    const headers = {
        "Accept": "application/json"
    }
    
    const task = await axios.post<ITask>(postUrl, data, {
        headers: headers
    });
    return task;
    
}