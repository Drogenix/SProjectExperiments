import {createAction, props} from "@ngrx/store";
import {MatchEvent} from "../../solution-1/match-events.service";

export const addMatchEvent = createAction(
  '[Match events] Add Event',
  props<MatchEvent>()
);

export const updateMatchEvent = createAction(
  '[Match events] Update Event',
  props<MatchEvent>()
);

export const deleteMatchEvent = createAction(
  '[Match events] Delete Event',
  props<MatchEvent>()
);
