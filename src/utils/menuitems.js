import { dashboard, expenses, transactions, trend } from "./icons"

export const menuItems=[
    {
        id: 1,
        title: 'Dashboars',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transactions,
        link: '/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        link: '/dashboard'
    },
    {
        id: 4,
        title: 'expenses',
        icon: expenses,
        link: '/dashboard'
    }
]