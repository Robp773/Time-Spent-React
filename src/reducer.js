// mock data
const initialState =
{
    // user name that the user logged in with
    userName: 'User Name',
    // current date
    date: 'April 1, 2018 ',
    // ----------------------------------------------------------------------------------------
    // entered records of current day's activities 
    // initial render will make a GET request for current date's records
    // if not records are found a blank template will be shown, otherwise the 
    // existing records for that day will be shown
    pastMins: [
        {
        name: 'Sleep', category: 'Health', productive: true, cost: 24,
        start: {period: 'AM', time: {hour: 8, minutes: 45},
        end: {period: 'AM', time: {hour: 9, minutes: 9}}   
        }
    },
        {
        name: 'Breakfast', category: 'Health', productive: true, cost: 30,
        start: {period: 'AM', time: {hour: 9, minutes: 20},
        end: {period: 'AM', time: {hour: 9, minutes: 50}}
        }   
    },
        {
        name: 'Shower', category: 'Health', productive: true, cost: 10,
        start: {period: 'AM', time: {hour: 9, minutes: 44},
        end: {period: 'AM', time: {hour: 9, minutes: 54}}
        }   
        },
    ], 
// ----------------------------------------------------------------------------------------
    // plans for later in the day that the user wants to accomplish but has not yet
    // when checked off, they will be transfered to the pastMins column. 
    // the cost property is initially an estimate of the time a task will take.
    // this can be changed when the task is completed. 
    futureMins:[
        {name: 'Walk the dog', category: 'Misc', productive: true, cost: 20},
        {name: 'Grocery Shopping', category: 'Errands', productive: true, cost: 65},
        {name: 'Make Dinner', category: 'Routine', productive: true, cost: 45}
    ]
// ----------------------------------------------------------------------------------------

} 
export const reducer =  (state = initialState, action) =>{


    return state;
}