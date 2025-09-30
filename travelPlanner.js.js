let trips = [
    { destination: "Korea", duration: 2, cost: 3000, type: "cultural"},
    { destination: "Japan", duration: 2, cost: 3500, type: "cultural"},
    { destination: "Thailand", duration: 1, cost: 2500, type: "leisure" },
    { destination: "China", duration: 1, cost: 2000, type: "adventure"}
];

function getTotalCost (trips) {
    return trips.reduce ((total, trip) => total + trip.cost, 0);
}

function filterTripsByType(trips, type){
    return trips.filter(trip => trip.type === type);
}

function getTheLongestTrip(trips){
    return trips.reduce((longest, trip) =>
        trip.duration > longest.duration ? trip : longest
    );
}

function groupTripsByCost(trips){
    const groups = { budget: [], midrange: [], luxury: [] };
    trips.forEach(trip => {
        if (trip.cost < 1000) {
            groups.budget.push(trip);
        } else if (trip.cost <= 1500){
            groups.midrange.push(trip);
        } else {
            groups.luxury.push(trip);
        }
    });
    return groups;
}

function FetchSuggestedTrips() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ([
                { destination: "Switzerland", duration: 3, cost: 4000, type: leisure},
                { destination: "Canada", duration: 3, cost: 4500, type: adventure}
            ]);
        }, 2000);
    });
}

console.log("Total Cost:", getTotalCost(trips));
console.log("Leisure Trips", filterTripsByType(trips, "leisure"));
console.log("Longest Trip:", getTheLongestTrip(trips));
console.log("Grouped by Cost:", groupTripsByCost(trips));

FetchSuggestedTrips().then(suggestedTrips => {
    trips = trips.concat(suggestedTrips);
    console.log("Updated Trips:", trips);
    console.log("New Total Cost:", getTotalCost(trips));
});