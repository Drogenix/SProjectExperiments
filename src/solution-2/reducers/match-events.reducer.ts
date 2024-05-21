import {createReducer, on} from "@ngrx/store";
import {MatchEvent} from "../../solution-1/match-events.service";
import {addMatchEvent, deleteMatchEvent, updateMatchEvent} from "../actions/match-events.action";

const initialState:MatchEvent[] = [
  {
    id:'1',
    time:'20:20',
    team:'Манчестер Юнайтед'
  },
  {
    id:'2',
    time:'20:21',
    team:'Манчестер Сити'
  },
];

export const matchEventsReducer = createReducer(
  initialState,
  on(addMatchEvent, (state, event) => {
    state.push(event);
    return state;
  }),
  on(updateMatchEvent, (state, eventToUpdate) => {
    const eventIndex = state.findIndex((event)=> event.id === eventToUpdate.id);

    const newState = [...state];

    if(eventIndex > -1){
      newState[eventIndex] = eventToUpdate;
    }

    return newState;
  }),
  on(deleteMatchEvent, (state, deleteEvent) => {
    const eventIndex = state.findIndex((event)=> event.id === deleteEvent.id);
    const newState = [...state];

    if(eventIndex > -1){
      newState.splice(eventIndex, 1);
    }

    return newState;
  }),
);
