export const users = {
    state: () => ({
        users: []
    }),

    getters: {
        getUserById: (state) => (id) => {
            const users = state.users;
            for (let i = 0; i < users.length; i++){
                if(users[i].login.uuid == id) return users[i];
            }
        
            return null;
        }
    },

    mutations: {
        setUsers: (state, newUserData) => {
            for(let i = 0; i < newUserData.length; i++){
                state.users.push(newUserData[i]);
            }
        }
    },

    actions: {
        fetchUsers: async (context, payload) => {
            let url = 'https://randomuser.me/api/' 
            if(Object.keys(payload).length == 2){
                url += '?' + payload.key + '=' + payload.value;
            }
            
            const json = await fetch(url)
                .then(res => {
                    console.log('成功')
                    return res.json();
                }).catch(error => {
                    console.log('error発生', error);
                    return null;
                })

            const userData = json.results;
            console.log(userData);
            context.commit('setUsers', userData);
        }
    }
}