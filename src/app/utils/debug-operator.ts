import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs'

export const debug = (message: string, logLevel?: any) => {
  return (source: Observable<any>) => source.pipe(
    tap(val => {
      if(logLevel === 'error') {
        console.error('ERROR: ' + message, val)
      } else {
        console.log(message, val);
      }
    })
  )
}
