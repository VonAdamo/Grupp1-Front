export default class HttpClient {

    #url = '';

    constructor(url) {
        this.#url = url;
    }

    async get() {
        try {
            const response = await fetch(this.#url)

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(`${response.status} ${response.statusText}`)
            }

        } catch (error) {
            throw new Error(`Ett fel inträffade i get metoden: ${error}`)
        }
    }

    async add(data) {
        try {
            console.log(data);
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                throw new Error(`${response.status} ${response.statusText}`)
            }

        } catch (error) {
            throw new Error(`Couldn't save user ${error}`)
        }
    }
}

const addNewUser = async(users) => {
    const url = "http://localhost:3000/users"

    try {
    const response = await fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': "application/json" 
        },
        body: JSON.stringify(users),
    });
    if (response.ok) {
        const newUser = await response.json();
        return newUser;
    }else{
        console.log("Failed")
    }
    } catch (error) {
    console.log(error)
    }
};