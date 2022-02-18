import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,

    users: [
        {
            id: 1,
            name: "Vitor Abreu",
        },
        {
            id: 2,
            name: "Usuário 2",
        }
    ],

    frames: [
        {
            id: 1,
            name: "Backlog"
        }, {
            id: 2,
            name: "Em Desenvolvimento"
        }, {
            id: 3,
            name: "Em Revisão"
        }, {
            id: 4,
            name: "Finalizado"
        }
    ],

    cards: [
        {
            id: 1,
            name: "Tarefa 1",
            description: "Essa é uma Tarefa em espera",
            frame: 1,
            users: [1,2]
        },
        {
            id: 2,
            name: "Tarefa 2",
            description: "Essa é uma Tarefa em desenvolvimento",
            frame: 2,
            users: [1]
        },
        {
            id: 2,
            name: "Tarefa 3",
            description: "Essa é mais uma Tarefa em desenvolvimento",
            frame: 2,
            users: [2]
        }
    ]
}

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = kanbanSlice.actions

export default kanbanSlice.reducer