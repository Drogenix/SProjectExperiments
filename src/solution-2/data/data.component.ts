import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {deleteMatchEvent, updateMatchEvent} from "../actions/match-events.action";
import {MatchEvent} from "../../solution-1/match-events.service";

@Component({
  selector: 'app-data2',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent2 {
    private readonly store = inject(Store<{matchEvents:MatchEvent[]}>);
    readonly events$:Observable<MatchEvent[]> = this.store.select('matchEvents');

    matchEventTrackBy(index:number, event:MatchEvent){
      return event.id;
    }

    update(event:MatchEvent){
      this.store.dispatch(updateMatchEvent(event));
    }

    delete(event:MatchEvent){
      this.store.dispatch(deleteMatchEvent(event));
    }
}
