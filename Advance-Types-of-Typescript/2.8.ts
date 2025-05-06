{
    //Asynchromous TypeScript


    //Promise

    type Todo = {
        id: number;
        userId: number,
        title: string;
        completed: boolean
    }
    const getToDo = async (): Promise<Todo>=> {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json()
        // console.log(data)

        return data
    }

    getToDo()

    type Something = {something: string}

    const createPromise = () : Promise<Something> => {
        return new Promise <Something> ((resolve, reject) => {
            const data : Something = {something: 'nothing'};
            if(data) {
                resolve(data)
            } else {
                reject('Failed to load data')
            }
        })
    }

    //calling createPromise function

    const showData = async() : Promise<Something>=> {
        const data : Something = await createPromise()
        // console.log(data)
        return data
    }

    showData()



}