import{Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'sqrt'
})

export class Sqrtpipe implements PipeTransform{
    transform(val:number):number{
        return Math.sqrt(val);
    }
}