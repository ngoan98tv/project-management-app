export default {
    auth: {
        isAuthenticated: false,
        token: null,
        user: {}
    },
    projects: [
        {
            id: 'p001',
            name: 'The first project',
            desc: 'A project at first',
            startDate: '2019-01-01',
            endDate: '2019-01-29',
            users: [{name: 'David'}, {name: 'Jack'}],
        },
        {
            id: 'p002',
            name: 'The second project',
            desc: 'A project at second',
            startDate: '2019-02-01',
            endDate: null,
            users: [{name: 'David'}, {name: 'Jack'}],
        }
    ],
    tasks: [
        {
            id: 't001',
            status: 'done',
            name: 'The first task',
            desc: 'A project at first',
            startDate: '2019-01-01',
            endDate: '2019-01-12',
            users: [{name: 'David'}],
            projectId: 'p001'
        },
        {
            id: 't002',
            status: 'done',
            name: 'The second task',
            desc: 'A project at second',
            startDate: '2019-01-01',
            endDate: '2019-01-22',
            users: [{name: 'Jack'}],
            projectId: 'p001'
        },
        {
            id: 't003',
            status: 'done',
            name: 'The third task',
            desc: 'A project at three',
            startDate: '2019-01-01',
            endDate: '2019-01-12',
            users: [{name: 'David'}],
            projectId: 'p002'
        },
        {
            id: 't004',
            status: 'done',
            name: 'The fourth task',
            desc: 'A project at fourth',
            startDate: '2019-01-01',
            endDate: '2019-01-22',
            users: [{name: 'Jack'}],
            projectId: 'p002'
        }
    ]
};