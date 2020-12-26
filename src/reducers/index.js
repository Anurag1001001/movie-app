// Reducers in Redux is a Pure function. And in functional programming a function is a pure function if it satisfied 3 conditions, i.e 1-- For the same input Output should be the same everyTime means that no matters how many times i call pure function with a different input but same type(same parameter, and type) Output should be same. 2-- And the second condition is that  function shouuld not use value of another variable that are not define in their local scope and should use argument that are provided to the function

//  reducers function takes two parameter one is current state(and this is not going to be  undefined that's why i initialise with an empty array) and the 2nd parameter would be action(type of action)

// reducers has to return something whether it could be a new state or something else


export default function movies(state=[], action){
    if(action.type == 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}

// there are some abilities 'store' give us and i.e 
// setState, Read the state, Update the state, listen to the state changes(subscribe)
