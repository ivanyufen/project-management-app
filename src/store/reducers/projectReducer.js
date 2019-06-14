const initState = {
    projects: [
        {
            id: 1, title: 'Ivan', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vero libero deleniti ipsa ab inventore quod, veniam rerum, repellat illo in aliquid ipsam labore. Iusto labore doloribus recusandae hic dolorem?'
        },
        {
            id: 2, title: 'Yufen', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vero libero deleniti ipsa ab inventore quod, veniam rerum, repellat illo in aliquid ipsam labore. Iusto labore doloribus recusandae hic dolorem?'
        },
        {
            id: 3, title: 'Stefanus', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vero libero deleniti ipsa ab inventore quod, veniam rerum, repellat illo in aliquid ipsam labore. Iusto labore doloribus recusandae hic dolorem?'
        },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': {
            console.log("projecttt", action.project);
        }
    }

    return state;
}

export default projectReducer;