import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {MatchEvent, MatchEventsService} from "../match-events.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-data',
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
export class DataComponent {
    private readonly matchEventsService = inject(MatchEventsService);
    private readonly destroyRef = inject(DestroyRef);
    readonly events$ = this.matchEventsService.events$;

    matchEventTrackBy(index:number, event:MatchEvent){
      return event.id;
    }

    update(event:MatchEvent){
      this.matchEventsService.update(event)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe();
    }

    delete(event:MatchEvent){
      this.matchEventsService.delete(event)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe();
    }
}
