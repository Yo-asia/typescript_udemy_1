enum DaysOfTheWeek{ //basically creating new data type
    MON, TUE, WED, THU, FRI, SAT, SUN
}

let day: DaysOfTheWeek;

day = DaysOfTheWeek.MON;

if ( day === DaysOfTheWeek.MON) {
    console.log('Got to go to work');
}