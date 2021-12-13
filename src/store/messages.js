import Vue from "vue";

export const messages = {
    state: () => ({
        messages: {}
    }),

    getters: {
        getMessagesById: (state) => (id) => {
            const messages = state.messages;        
            return (messages[id] != undefined) ? messages[id] : null;
        }
    },

    mutations: {
        setMessages: (state, payload) => {
            let messages = state.messages;
            if(messages[payload.id] == undefined) Vue.set(messages, payload.id, [payload.messages])
            else messages[payload.id].push(payload.messages);

            console.log(messages);
        }
    }
}