export const getState = ({setStore, getStore, getActions}) => {

    return {
        store: {
            peoples: [],
            planets: [],
            vehicles: [],
            favorites: [],
           
        },
        actions: {
            getPeoples: () =>{
                fetch("https://swapi.dev/api/people/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }).then(res => res.json())
                    .then(data => setStore({peoples: data.results })) 
                  const store = getStore() 
            },
            getPlanets: () =>{
                fetch("https://swapi.dev/api/planets/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }).then(res => res.json())
                    .then(data => setStore({planets: data.results })) 
                  const store = getStore() 
            },
            getVehicles: () =>{
                fetch("https://swapi.dev/api/vehicles/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }).then(res => res.json())
                    .then(data => setStore({vehicles: data.results })) 
                  const store = getStore() 
            },
        },
    }
};

