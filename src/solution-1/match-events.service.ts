import { Injectable } from '@angular/core';
import {BehaviorSubject, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface MatchEvent{
  id:string;
  time:string;
  team:string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchEventsService {
  private readonly eventsArray:MatchEvent[] = [
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
  private readonly _events = new BehaviorSubject<MatchEvent[]>(this.eventsArray);
  readonly events$ = this._events.asObservable();

  constructor(private http:HttpClient) {}

  add(event:MatchEvent){
    this.http.post<MatchEvent>('', event).pipe(
      tap((event)=> {
        this.eventsArray.push(event);

        this._events.next(this.eventsArray);
      })
    );
  }

  update(updatedEvent:MatchEvent){
    //http.post вместо of(null)

    return of(null).pipe(
      tap((event)=> {
        const eventIndex = this.eventsArray.findIndex((event)=> event.id === updatedEvent.id);

        if(eventIndex > -1){
          this.eventsArray[eventIndex] = updatedEvent;
        }

        this._events.next(this.eventsArray);
      })
    );
  }

  delete(deleteEvent:MatchEvent){
    //http.delete вместо of(null)

    return of(null).pipe(
      tap(()=>{
        const eventIndex = this.eventsArray.findIndex((event)=>event.id === deleteEvent.id);

        if(eventIndex > -1){
          this.eventsArray.splice(eventIndex,1);
        }

        this._events.next(this.eventsArray);
      })
    )
  }
}

