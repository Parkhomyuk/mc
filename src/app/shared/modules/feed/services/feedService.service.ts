import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class FeedService {
    
    constructor(private http: HttpClient){}

    getFeed(url: string): Observable<GetFeedResponseInterface>{
        const fullUrl = environment.apiUrl+url;
        return this.http.get<GetFeedResponseInterface>(fullUrl)
    }


}